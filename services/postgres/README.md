# Factorim PostgreSQL

PostgreSQL database to host Factorim offchain data.

## Development

### Config

Copy the config:

```
cp .env.example .env
```

### Start

Start a PostgreSQL database + PgAdmin for development:

```
make dev-docker &
```

By default database is connected on port 6132

## Verify

Connect to database:

```bash
docker exec -it factorim-postgres psql -U factorim -d factorimdb
```

List all the databases:

```bash
\l
```

## Explore

To explore the database, you can use:

- dbeaver: [https://dbeaver.io/](https://dbeaver.io/)
- pgadmin: [./services/pgadmin](./services/pgadmin)
