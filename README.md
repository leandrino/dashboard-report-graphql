# graphql-example
Start files from graphql

## Start development application

This example was created for development environment, no has optimization to production environment.

### Dependence

Basic environment:
- MongoDB
- Node
- Yarn

With docker: (Only Windows 10 Pro+ or Unix like environment)
- Docker
- Docker Compose

### Start commands

```
yarn server:watch
```

If use docker, you can start with:

```bash
# Start environment and wait.
docker-compose up

# Enter in container
docker-compose exec app bash

# Start server
yarn server:watch
```

## Lint

This boilerplate has Husky and TSLint setup, and every commit run the lint and break to any error. To manual start, use this command:

```
yarn lint
```

# TODO
- [x] ~~Add TSlint~~
- [x] ~~Add Environment variables~~
- [x] ~~Fix categories query and mutation~~
- [ ] Unit tests
- [ ] Add [Dataloader](https://www.youtube.com/watch?v=OQTnXNCDywA) 
