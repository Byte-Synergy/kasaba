FROM oven/bun:1.3.8-alpine AS base

FROM base AS installer
WORKDIR /app
COPY . .
ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

RUN bun install --frozen-lockfile
RUN bun run build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
# ENV BUN_JSC_forceRAMSize=1073741824

RUN addgroup --system --gid 1001 new_group
RUN adduser --system --uid 1001 new_user
USER new_user

COPY --from=installer --chown=new_user:new_group /app/.next/standalone ./
COPY --from=installer --chown=new_user:new_group /app/.next/static ./.next/static
COPY --from=installer --chown=new_user:new_group /app/public ./public

CMD ["bun", "run", "--smol", "server.js"]
