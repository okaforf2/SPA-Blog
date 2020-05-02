const Router = require('koa-router')
const model = require('../models/likes')
//Prefixed all routes with below
const router = Router({
    prefix: '/api/v1.0/likes'
})

const bodyParser = require('koa-bodyparser')

















module.exports = router