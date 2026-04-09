# 1. Base image
FROM oven/bun:1.1-alpine AS base

# 2. Dependencies
FROM base AS deps
WORKDIR /app
# Lockfile bo'lmasligi mumkin (monorepo root'da bo'lsa), shuning uchun faqat package.json nusxalaymiz
COPY package.json ./
RUN bun install

# 3. Builder
FROM base AS builder
WORKDIR /app
# Installer dagi node_modules ni nusxalaymiz
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

# Build jarayoni
RUN bun run build

# 4. Runner stage: Minimal production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

# Xavfsizlik uchun yangi user yaratamiz
RUN addgroup --system --gid 1001 new_group
RUN adduser --system --uid 1001 new_user
USER new_user

# Next.js standalone output'ni nusxalaymiz
# Standalone mode node_modules'larni production uchun minimal ko'rinishga keltiradi
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Standalone server'ni ishga tushirish
# Standalone mode'da server.js har doim standalone papkasining ildizida bo'ladi
CMD ["bun", "server.js"]
