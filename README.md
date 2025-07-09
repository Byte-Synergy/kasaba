# Kasaba Client

## Overview

This project requires two backup files for proper operation:

- **MinIO backup**: `server/backups/s3/kasaba`
- **SQL backup**: `server/backups/db/kasaba.sql`

Ensure both files are present before starting the application.

### 🔐 License Activation

To run the backend, two additional files are required for license validation:

- `server/src/license/license.json`

These files must be placed inside the `server/src/license/` directory before starting the application.  
The backend will not start without a valid license.

> ⚠️ Do not modify `license.json` manually — it is cryptographically signed and tampering will invalidate it.

## Prerequisites

- **Docker** must be installed on the server.

### Installing Docker

On Ubuntu:

```sh
sudo apt-get update
sudo apt-get install -y docker.io
sudo systemctl enable docker
sudo systemctl start docker
```

On other systems, refer to the [official Docker documentation](https://docs.docker.com/get-docker/).

## Running in Production

To start the project in production, execute the `start.sh` script:

```sh
./start.sh
```

### Setting Permissions

Ensure `start.sh` is executable:

```sh
chmod +x start.sh
```

## Notes for DevOps

- Verify that Docker is running before executing `start.sh`.
- Ensure backup files are up-to-date and accessible at the specified locations.
- Ensure `license.json` are present in `server/src/`.
- For troubleshooting, check Docker logs and script output.
