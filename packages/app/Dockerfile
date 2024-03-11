FROM node:20.10-slim AS deps

WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm i -g pnpm
RUN pnpm i

FROM node:20.10-slim AS builder

WORKDIR /app
COPY --from=deps /app/package.json ./package.json
COPY --from=deps /app/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm i -g pnpm
RUN pnpm run build

FROM node:20.10-slim AS runner

ARG X_TAG
WORKDIR /app

RUN npm i -g pnpm

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY src ./src
COPY next.config.mjs next.config.mjs

# Execute script
RUN chown -R node:node ./.next/

# Disable next telemetry.
ENV NEXT_TELEMETRY_DISABLED 1

USER node
CMD ["pnpm", "start"]