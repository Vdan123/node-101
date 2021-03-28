const fs = require('fs')
const koa = require('koa')
const mount = require('koa-mount')

const app = new koa()

app.use(
  mount('/', async ctx => {
    ctx.body = fs.readFileSync(__dirname + '/index.html', 'utf-8')
  })
)

// nodemon node index.js 使用 nodemon 进行热更新
app.listen(3000)