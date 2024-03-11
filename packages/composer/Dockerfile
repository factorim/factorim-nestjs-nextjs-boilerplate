FROM node:20.10 As build

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm i -g pnpm
RUN pnpm install

COPY . .

RUN pnpm run build

FROM node:20.10-slim as run

WORKDIR /app

RUN npm install -g pnpm

COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./
COPY --from=build /app/pnpm-lock.yaml ./
COPY --from=build /app/dist ./dist

RUN mkdir ./src
RUN chown -R node:node ./src 

RUN apt-get update && apt-get install -y bash openssl && rm -rf /var/lib/apt/lists/*

USER node
CMD ["pnpm", "run", "start:prod"]