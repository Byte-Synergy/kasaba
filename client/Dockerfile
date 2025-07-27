FROM oven/bun:1.2.18 AS base

FROM base AS installer

WORKDIR /app

COPY . .

ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

RUN bun i

RUN bun run build