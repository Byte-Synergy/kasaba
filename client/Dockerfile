FROM oven/bun:1.2.18 AS base

FROM base AS installer

WORKDIR /app

COPY . .

ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

RUN bun i

RUN bun run build

FROM base AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 new_group
RUN adduser --system --uid 1001 new_user
USER new_user

COPY --from=installer --chown=new_user:new_group /app/.next/standalone ./
COPY --from=installer --chown=new_user:new_group /app/.next/static ./.next/static
COPY --from=installer --chown=new_user:new_group /app/public ./public

CMD bun run server.js