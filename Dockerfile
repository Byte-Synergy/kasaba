# 1. Base image as Debian for better stability during heavy installs
FROM oven/bun:latest AS base
RUN apt-get update && apt-get install -y git

# Stage 1: Prune
FROM base AS builder
WORKDIR /app
RUN bun add -g turbo
COPY . .
RUN turbo prune --scope=client --docker

# Stage 2: Install dependencies (Debian is more robust for large tarballs like react-icons)
FROM base AS installer
WORKDIR /app
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/bun.lock ./bun.lock
# Increase network timeout and retry for bun
RUN bun install

# Stage 3: Build the project
FROM base AS sourcer
WORKDIR /app
COPY --from=installer /app/ .
COPY --from=builder /app/out/full/ .
COPY .gitignore .gitignore

ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

RUN bun run build --filter=client

# Stage 4: Runner (Using alpine for smallest final image)
FROM oven/bun:alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Alpine uses addgroup/adduser
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=sourcer /app/apps/client/public ./apps/client/public
COPY --from=sourcer --chown=nextjs:nodejs /app/apps/client/.next/standalone ./
COPY --from=sourcer --chown=nextjs:nodejs /app/apps/client/.next/static ./apps/client/.next/static

EXPOSE 3000

CMD ["bun", "apps/client/server.js"]
