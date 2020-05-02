const Router = require('koa-router')
const model = require('../models/categories')
//Prefixed all routes with below
const router = Router({
    prefix: '/api/v1.0/catergories'
})

const bodyParser = require('koa-bodyparser')

















module.exports = router