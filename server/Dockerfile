FROM oven/bun:1.2.18

RUN apt-get update && apt-get install -y openssl

WORKDIR /app

COPY ./src/seed.js ./src/seed.js
COPY ./src/generated ./src/generated
COPY ./src/server-linux-arm ./src/server
COPY ./src/license ./src/license

RUN bun i -g prisma

RUN chmod -R +rx /root/.bun

RUN addgroup --system --gid 1001 new_group
RUN adduser --system --uid 1001 new_user
USER new_user

# CMD bunx prisma db push --schema=./src/generated/prisma --skip-generate && bun run ./src/seed.js && ./src/server
CMD bun run ./src/seed.js && ./src/server
