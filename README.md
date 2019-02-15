# graphql-example
Start files from graphql

## Start development application

This example was created for development environment, no has optimization to production environment.

### Dependence

Basic environment:
- Postgres (docker-compose)
- Node
- Yarn

.env file: basic setup with postgres

- POSTGRES_USER= Postgres database user
- POSTGRES_PASSWORD= Postgres database user
- POSTGRES_HOST= Postgres database user
- POSTGRES_PORT= Postgres database user
- POSTGRES_DATABASE= Postgres database user


### Start commands

```
yarn server:watch
```

If use docker, you can start with:

```bash
# Start server
yarn server:watch
```

## Lint

This boilerplate has Husky and TSLint setup, and every commit run the lint and break to any error. To manual start, use this command:

```
yarn lint
```

# TODO
- [ ] Unit tests
- [ ] Add [Dataloader](https://www.youtube.com/watch?v=OQTnXNCDywA) 
