FROM oven/bun:1.2.18

RUN apt-get update && apt-get install -y openssl

WORKDIR /app

COPY ./src/seed.js ./src/seed.js
COPY ./src/seed.js.map ./src/seed.js.map
COPY ./src/generated ./src/generated
COPY ./src/server-linux-arm ./src/server
COPY ./src/license ./src/license


RUN addgroup --system --gid 1001 new_group
RUN adduser --system --uid 1001 new_user
USER new_user

CMD bun run ./src/seed.js && ./src/server
