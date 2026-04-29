FROM oven/bun:alpine AS base

# Stage 1: Prune
FROM base AS builder
WORKDIR /app
RUN bun add -g turbo
COPY . .
RUN turbo prune --scope=client --docker

# Stage 2: Install dependencies
FROM base AS installer
WORKDIR /app
COPY --from=builder /app/out/json/ .
# Pruned json fayllarga qarab dependency-larni o'rnatamiz
# --frozen-lockfile ni olib tashlaymiz, chunki pruned workspace da u ko'pincha error beradi
RUN bun install

# Stage 3: Build the project
FROM base AS sourcer
WORKDIR /app
COPY --from=installer /app/ .
COPY --from=builder /app/out/full/ .
COPY .gitignore .gitignore

# Build arguments for environment variables
ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

RUN bun run build --filter=client

# Stage 4: Runner
FROM base AS runner
WORKDIR /app

# Production environment variables
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=sourcer /app/apps/client/public ./apps/client/public

# Automatically leverage output traces to reduce image size
COPY --from=sourcer --chown=nextjs:nodejs /app/apps/client/.next/standalone ./
COPY --from=sourcer --chown=nextjs:nodejs /app/apps/client/.next/static ./apps/client/.next/static

# Expose the port
EXPOSE 3000

# Run with bun
CMD ["bun", "apps/client/server.js"]
