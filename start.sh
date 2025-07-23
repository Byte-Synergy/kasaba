#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

print_status() { echo -e "${GREEN}✅ $1${NC}"; }
print_warning() { echo -e "${YELLOW}⚠️  $1${NC}"; }
print_error() { echo -e "${RED}❌ $1${NC}"; }
print_info() { echo -e "${BLUE}🔍 $1${NC}"; }

if [ ! -f ".env" ]; then
  print_error ".env file not found! Please create it with the required variables."
  exit 1
fi

set -a
source .env
set +a

exported_vars=$(grep -v '^#' .env | grep -v '^\s*$' | cut -d= -f1 | xargs)
export $exported_vars

echo "Exported variables:"
for var in $exported_vars; do
  echo "$var=${!var}"
done

required_vars=("POSTGRES_USER" "POSTGRES_PASSWORD" "POSTGRES_DB" "MINIO_ROOT_USER" "MINIO_ROOT_PASSWORD" "MINIO_BUCKET")
for var in "${required_vars[@]}"; do
  if [ -z "${!var}" ]; then
    print_error "Required environment variable $var is not set in .env file"
    exit 1
  fi
done

print_info "Environment variables loaded successfully"

print_info "Checking if Docker services are already running..."
if docker compose ps | grep -q "Up"; then
  print_warning "Services are already running."
  read -p "Do you want to stop and rebuild them? (Yes/No): " confirm
  if [[ "$confirm" =~ ^[Yy]([Ee][Ss])?$ ]]; then
    print_info "Stopping and removing existing containers..."
    docker compose down
    print_info "Rebuilding and restarting containers..."
    docker compose up -d --build
  else
    print_info "Keeping current running containers. Proceeding to backup restore..."
  fi
else
  print_info "Starting containers for the first time..."
  docker compose up -d --build
fi

# Wait for services to be ready
print_info "Waiting for PostgreSQL to be ready..."
max_attempts=30
attempt=0
while ! docker exec kasaba-postgres pg_isready -U "$POSTGRES_USER" >/dev/null 2>&1; do
  sleep 2
  attempt=$((attempt + 1))
  if [ $attempt -ge $max_attempts ]; then
    print_error "PostgreSQL not ready after $((max_attempts * 2)) seconds."
    exit 1
  fi
  echo -n "."
done
print_status "PostgreSQL is ready."

# Wait for MinIO
print_info "Waiting for MinIO to be ready..."
attempt=0
while ! docker exec kasaba-minio curl -s --head http://localhost:9000/minio/health/live >/dev/null 2>&1; do
  sleep 2
  attempt=$((attempt + 1))
  if [ $attempt -ge $max_attempts ]; then
    print_error "MinIO not ready after $((max_attempts * 2)) seconds."
    exit 1
  fi
  echo -n "."
done
print_status "MinIO is ready."

# Wait for Redis
print_info "Waiting for Redis to be ready..."
attempt=0
while ! docker exec kasaba-redis redis-cli ping | grep -q PONG; do
  sleep 2
  attempt=$((attempt + 1))
  if [ $attempt -ge $max_attempts ]; then
    print_error "Redis not ready after $((max_attempts * 2)) seconds."
    exit 1
  fi
  echo -n "."
done
print_status "Redis is ready."

# Setup MinIO and restore S3 backup
print_info "Setting up MinIO and restoring S3 backup..."
if docker exec kasaba-minio [ -d /data/kasaba ]; then
  print_warning "'kasaba' folder already exists in MinIO container. Skipping S3 restore."
else
  if [ -d "./server/backups/s3/kasaba" ]; then
    print_info "Copying S3 backup to MinIO container..."
    docker cp ./server/backups/s3/kasaba kasaba-minio:/data
    print_status "S3 backup restored successfully to MinIO"
  else
    print_warning "S3 backup folder './server/backups/s3/kasaba' not found. Skipping S3 restore."
  fi
fi

# Restore PostgreSQL database
print_info "Restoring PostgreSQL database..."
if [ ! -f "./server/backups/db/kasaba.sql" ]; then
  print_error "Database backup file './server/backups/db/kasaba.sql' not found!"
  exit 1
fi

db_tables_count=$(docker exec -e PGPASSWORD="$POSTGRES_PASSWORD" kasaba-postgres \
  psql -U "$POSTGRES_USER" -d "$POSTGRES_DB" -tAc "SELECT count(*) FROM information_schema.tables WHERE table_schema='public';")

if [ "$db_tables_count" -gt 0 ]; then
  print_warning "Database '$POSTGRES_DB' already exists and is not empty. Skipping restore."
else
  print_info "Restoring database from kasaba.sql..."
  cat server/backups/db/kasaba.sql | docker exec -i kasaba-postgres psql -U "$POSTGRES_USER" -d "$POSTGRES_DB"
fi

if [ $? -eq 0 ]; then
  print_status "Database restored successfully"
else
  print_error "Failed to restore database"
  exit 1
fi

print_status "All services are ready and backups have been restored successfully!"
print_info "You can now access your application."
