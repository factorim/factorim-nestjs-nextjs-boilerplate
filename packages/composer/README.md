# Factorim Composer

NestJS application designed to automatically generate posts using OpenAI.

## Development

### Start

To start for development:

```bash
pnpm i
make dev
```

### Change config

Config values for `.env`, `.env.example`:

| Var                | Description                 | Values                      |
| ------------------ | --------------------------- | --------------------------- |
| NODE_ENV           | Node environment            | 'production', 'development' |
| PORT               | Service port                | 4000                        |
| DEBUG_PORT         | Debug port                  | 4090                        |
| API_GRAPHQL_URL    | GraphQL API url             |                             |
| API_GRAPHQL_WS_URL | GraphQL Web Socket url      |                             |
| API_KEY            | API Key for service account |                             |
| OPENAI_API_KEY     | OpenAPI API Key             |                             |
