# 1. Base image
FROM oven/bun:1.4-alpine AS base

# 2. Prune stage: Monorepo'dan faqat 'client' app va uning dependencylarini ajratib olamiz
FROM base AS pruner
WORKDIR /app
# turbo ni o'rnatamiz
RUN bun add -g turbo
COPY . .
# 'client' app uchun build contextni qirqib olamiz
RUN turbo prune client --out-dir=out

# 3. Installer stage: Faqat pruned package.json larni nusxalab, install qilamiz
FROM base AS installer
WORKDIR /app

# Avval faqat package.json va lockfile nusxalanadi (caching uchun)
COPY --from=pruner /app/out/json/ .
RUN bun install --frozen-lockfile

# 4. Builder stage: Kodni build qilamiz
FROM base AS builder
WORKDIR /app
# Installer dagi node_modules ni nusxalaymiz
COPY --from=installer /app/ .
# Prune qilingan to'liq kodni nusxalaymiz
COPY --from=pruner /app/out/full/ .

ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

# Build jarayoni (Turborepo orqali)
RUN bun run build --filter=client

# 5. Runner stage: Minimal production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

# Xavfsizlik uchun yangi user yaratamiz
RUN addgroup --system --gid 1001 new_group
RUN adduser --system --uid 1001 new_user
USER new_user

# Next.js standalone output'ni nusxalaymiz
# Standalone mode node_modules'larni production uchun minimal ko'rinishga keltiradi
COPY --from=builder --chown=new_user:new_group /app/apps/client/.next/standalone ./
COPY --from=builder --chown=new_user:new_group /app/apps/client/.next/static ./apps/client/.next/static
COPY --from=builder --chown=new_user:new_group /app/apps/client/public ./apps/client/public

# Standalone server'ni ishga tushirish
CMD ["bun", "run", "--smol", "apps/client/server.js"]
