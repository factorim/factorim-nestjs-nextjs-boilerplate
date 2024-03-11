# Factorim App

Next.js application designed to showcase a user-friendly Tailwind interface.

## Development

### Start

To start Factorim App for development, install packages and start application:

```bash
pnpm i
make dev
```

App should be available at: http://localhost:3000

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
   - Ensure a valid .env file is present in ./packages/app.

**Test CI:**

To run GitHub action CI:

```bash
act --secret-file .env  --var-file ./packages/app/.env -W .github/workflows/app-ci-build-test.yml
```

### Storybook

To start Storybook

```bash
make storybook
```

Storybook should be available at: http://localhost:6006/

## Config

Config values for `.env`

| Var                               | Description                                                     | Values                |
| --------------------------------- | --------------------------------------------------------------- | --------------------- |
| PORT                              | Application port                                                | `number` (valid port) |
| NEXT_PUBLIC_API_GRAPHQL_URL       | URL endpoint for the GraphQL API                                | `URL`                 |
| NEXT_PUBLIC_API_GRAPHQL_WS_URL    | URL endpoint for the WebSocket GraphQL API                      | `URL`                 |
| API_INTERNAL_GRAPHQL_URL          | Internal URL endpoint for the GraphQL API                       | `URL`                 |
| API_INTERNAL_GRAPHQL_WS_URL       | Internal URL endpoint for the WebSocket GraphQL API             | `URL`                 |
| AUTH_SECRET                       | Secret key used for signing and verifying authentication tokens | `string`              |
| AUTH_SESSION_MAX_AGE              | Maximum age for the authentication session before it expires    | `number` (seconds)    |
| AUTH_GOOGLE_CLIENT_ID             | Client ID for Google OAuth integration                          | `string`              |
| AUTH_GOOGLE_CLIENT_SECRET         | Client Secret for Google OAuth integration                      | `string`              |
| NEXT_PUBLIC_AUTH_JWT_REFRESH_IN   | Lifetime duration for the JWT refresh token                     | `number` (seconds)    |
| NEXT_PUBLIC_SOCIAL_GITHUB_URL     | URL to the project's GitHub page                                | `URL`                 |
| NEXT_PUBLIC_SOCIAL_TWITTER_URL    | URL to the project's Twitter page                               | `URL`                 |
| NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID | The Google Tag Manager ID                                       | `string`              |

## Docker Build

### Building the Docker Image

Build a Docker image:

```bash
docker build -t factorim-app:latest .
```

### Running the Docker Image

Run it with:

```bash
docker run factorim-app:latest
```

## About

This is a [Next.js](https://nextjs.org/) project.
