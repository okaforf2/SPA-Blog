let Router = require('koa-router')
let router = Router({
    prefix: '/api/v1.0/'
})

router.get('/', (cnx, next) => {
    cnx.body = {message:'Welcome bro...'}
})

module.exports = router