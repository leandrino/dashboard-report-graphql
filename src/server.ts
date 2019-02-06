import * as Koa from 'koa'
import * as Router from 'koa-router'
import graphqlHTTP = require('koa-graphql')
import { DB_PATH, DB_USER, DB_PASS } from './config/environment-variables'

const app = new Koa()
const router = new Router()

app.use(async (ctx: Koa.Context, next: any) => {
  await next()
})

router.all(
  '/graphql',
  graphqlHTTP({
    graphiql: true,
  })
)

router.post('/update-data', (ctx: Koa.Context) => {
  ctx.body = {
    message: 'success',
    data: {
      received: ctx.response.body,
    },
  }
})

app.use(router.routes())

app.listen(3000)
