const Koa = require('koa')
const Router = require('koa-router')
const applyRoutes = require('./routes')
const bodyParser = require('koa-bodyparser')
const cors = require('@koa/cors');

const app = new Koa()
const router = new Router()

module.exports = () => {
    console.log('[Koa] Creating a new server') 

    app.use(cors())

    applyRoutes(router)

    app.use(bodyParser()).use(router.routes()).use(router.allowedMethods())

    app.listen(8080)
}