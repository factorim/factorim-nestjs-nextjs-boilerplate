# Factorim API

NestJS GraphQL API.

## Development

### Start

To start for development:

```bash
pnpm i
make dev
```

It will automatically create `.env` config file if it doesn't exists.

GraphQL API and Playground will be available at: http://localhost:4000/graphql

Swagger UI will be available at: http://localhost:4000/docs

### Start with Docker

To run with docker

```bash
make dev-docker
```

### Test GitHub actions

To properly test the GitHub Actions CI process, ensure the following steps are completed:

1. Navigate to the Root Directory: Start by ensuring you're in the root directory of the repository.

2. Configure Environment Variables:
   - Set your GITHUB_TOKEN in the .env file located at the root of the repository.
   - Ensure a valid .env file is present in ./packages/api.

**Test CI:**

To run GitHub action CI:

```bash
act --secret-file .env  --var-file ./packages/api/.env -W .github/workflows/api-ci-build-test.yml
```

### Change config

Config values for `.env`, `.env.example`:

| Var                         | Description                           | Values                                  |
| --------------------------- | ------------------------------------- | --------------------------------------- |
| NODE_ENV                    | Node environment                      | `string` ('production', 'development' ) |
| PORT                        | Service port                          | `number` (valid port)                   |
| DEBUG_PORT                  | Debug port                            | `number` (valid port)                   |
| DB_HOST                     | Database hostname                     | `string`                                |
| DB_PORT                     | Database port                         | `number` (e.g., 5432)                   |
| DB_DATABASE                 | Database name                         | `string`                                |
| DB_SCHEMA                   | Database schema                       | `string`                                |
| DB_USERNAME                 | Database username                     | `string`                                |
| DB_PASSWORD                 | Database password                     | `string`                                |
| DATABASE_URL                | Database access url                   |                                         |
| GRAPHQL_PLAYGROUND          | Is GraphQL Playground enabled         | `boolean` (true, false)                 |
| GRAPHQL_DEBUG               | Debug GraphQL                         | `boolean` (true, false)                 |
| API_KEY                     | Service API Key                       | `string`                                |
| JWT_EXPIRES_IN              | Expiration time of JWT for access     | `string` (e.g., '1h')                   |
| JWT_REFRESH_IN              | Expiration time of JWT for refresh    | `string` (e.g., '15d')                  |
| JWT_ACCESS_SECRET           | Secret key used to sign access JWT    | `string`                                |
| JWT_REFRESH_SECRET          | Secret key used to sign refresh JWT   | `string`                                |
| APP_URL                     | Base URL of the application           | `string`                                |
| EMAIL_SENDGRID_API_KEY      | API key for integrating with SendGrid | `string`                                |
| EMAIL_VALIDATION_EXPIRATION | API key for integrating with SendGrid | `number` (minutes)                      |
| EMAIL_CONTACT               | Contact email address                 | `email`                                 |
| EMAIL_NO_REPLY              | "No-reply" email address              | `email`                                 |
| LOG_LEVEL                   | Level of logging details              | 'debug', 'info', 'warn', 'error'        |

### Test

```bash
# unit tests
pnpm run test

# e2e tests
pnpm run test:e2e

# test coverage
pnpm run test:cov
```

## Docker Build

### Building the Docker Image

Build a Docker image:

```bash
docker build -t factorim-api:latest .
```

### Running the Docker Image

Run it with:

```bash
docker run factorim-api:latest
```

## Postman

Postman collection: [Factorim API.postman_collection.json](./postman/Factorim%20API.postman_collection.json)

## GraphQL Playground

### Auth

To execute authenticated requests in GraphQL playground, add in `HTTP HEADERS`:

```json
{
  "Authorization": "Bearer YOUR_ACCESS_TOKEN"
}
```

## About

This is a [NestJS](https://nestjs.com/) project.

Also, a great source of inspiration [nestjs-prisma-starter](https://github.com/notiz-dev/nestjs-prisma-starter).
