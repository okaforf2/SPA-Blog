const Router = require('koa-router')
const model = require('../models/pinneds')
//Prefixed all routes with below
const router = Router({
    prefix: '/api/v1.0/pinneds'
})

const bodyParser = require('koa-bodyparser')




















module.exports = router