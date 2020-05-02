const Router = require('koa-router')
const model = require('../models/comments')
//Prefixed all routes with below
const router = Router({
    prefix: '/api/v1.0/comments'
})

const bodyParser = require('koa-bodyparser')

// Routes will go here
router.get('/', async (cnx, next) => {
    let id = cnx.params.id
    cnx.body = await model.getAll(id)
})


    // the id should be a number greater than or equal to 1
router.get('/:id([0-9]{1,})', async (cnx, next) => {
    let id = cnx.params.id
    let data = await model.getById(id)

    if (data === null){
        cnx.body.response.status = 404
        cnx.body = {message:"comment not found"}
    }
    else
        cnx.body = data
})

router.post('/', bodyParser(), async (cnx, next) => {
    // add remaining properties!!!
    let newComment = {allText:cnx.request.body.allText,
                    }

await model.add(newComment)
cnx.body = {message:"added successfully"}
})

router.put('/:id([0-9]{1,})',bodyParser(), async (cnx, next) => {
    {
    const id = cnx.params.id 
    allText:cnx.request.body.allText
        let data = await model.putById(id, allText)
        cnx.body = data
    }
    
})

router.del('/:id([0-9]{1,})', async (cnx, next) => {
    const id = cnx.params.id 
     
    let delComment = await model.deleteById(id)
    console.log(delComment)
    
    await model.deleteById(delArticle)
    cnx.body = {message:"added successfully"}
})



module.exports = router