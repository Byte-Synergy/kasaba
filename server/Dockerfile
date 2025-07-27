FROM oven/bun:1.2.18

RUN apt-get update && apt-get install -y openssl

WORKDIR /app

COPY ./prisma ./prisma
COPY ./src ./src
COPY ./package.json .
COPY ./start.sh .

RUN bun i

RUN addgroup --system --gid 1001 new_group
RUN adduser --system --uid 1001 new_user

RUN chmod +x ./start.sh

RUN chown -R new_user:new_group /app

USER new_user

CMD bunx prisma generate --schema=./prisma && ./start.sh
