import * as Koa from "koa";
import * as Router from "koa-router";
import graphqlHTTP = require("koa-graphql");
import schema from "./graphql/schema";
import { postgresDB } from "./database/postgres-db";
const app = new Koa();
const router = new Router();

const bootstrap = async () => {
  await postgresDB();

  app.use(async (ctx: Koa.Context, next: any) => {
    await next();
  });

  router.all(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true
    })
  );

  router.post("/update-data", (ctx: Koa.Context) => {
    ctx.body = {
      message: "success"
    };
  });

  app.use(router.routes());

  app.listen(3000);
};

bootstrap();
