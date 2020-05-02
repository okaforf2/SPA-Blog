const Router = require('koa-router')
const model = require('../models/article')
//Prefixed all routes with below
const router = Router({
    prefix: '/api/v1.0/articles'
})

const bodyParser = require('koa-bodyparser')

// Routes will go here
router.get('/', async (cnx, next) => {
    let id = cnx.params.id
    let limit = (cnx.request.query.limit === undefined ? 32:cnx.request.query.limit);
    console.log(limit)
    let page = (cnx.request.query.page === undefined ? 1:cnx.request.query.page);
    //validate the query parameters
    limit = limit > 200 ? 200: limit; 
    limit = limit < 1 ? 32: limit; 
    page = page < 1 ? 1 : page; 
    cnx.body = await model.getAll(id)
})

router.get('/:id([0-9]{1,})', async (cnx, next) => {
    try{
    let id = cnx.params.id
    let data = await model.getById(id)

    if (data.length === 0){
        // cnx.body.response.status = 404;
        cnx.body = {message:"article not found"}
    }
    else
        cnx.body = data
    }
    catch(error){
        console.log(error.status)
        if(error.status === undefined){
            error.status = 500;
            throw error;
        }
        cnx.response.status = error.status
        cnx.body = {message:error.message, status:error.status}
    }
})


router.post('/', bodyParser(), async (cnx, next) => {

    // add remaining properties!!!
    let newArticle = {
                      title:cnx.request.body.title === undefined ? undefined: cnx.request.body.title,
                      all_text:cnx.request.body.allText === undefined ? undefined: cnx.request.body.all_text,
                      summary:cnx.request.body.summary === undefined ? undefined: cnx.request.body.summary,
                      image_url: cnx.request.body.image_url === undefined ? undefined: cnx.request.body.image_url
                    }

await model.add(newArticle)
cnx.body = {message:"added successfully"}
})

router.put('/:id([0-9]{1,})',bodyParser(), async (cnx, next) => {
    {
        try {
    const id = cnx.params.id 
        let title = cnx.request.body.title
        let all_text = cnx.request.body.all_text
        let published = cnx.request.body.published
        let image_url = cnx.request.body.image_url

        let data = await model.putById(id,title, all_text, published, image_url)
            if(data.length === 0){
                cnx.response.status =  404;
                cnx.body = {message: "article not found"}

            } else
    
        cnx.body = data
        }
        catch(error){
            console.log(error.status)
            console.log(error.message)
            if(error.status === undefined){
                error.status = 500;
                throw error;
            }
            cnx.response.status = error.status
            cnx.body = {message:error.message, status:error.status}
        }
    } 


})

router.del('/:id([0-9]{1,})', async (cnx, next) => {
    try {
    const id = cnx.params.id 
     console.log(id)
    let delArticle = await model.deleteById(id)
    console.log('Item deleted successfully')
    if(data.length === 0){
        cnx.response.status = 404;
        cnx.body = {message:"added successfully"}
    } else
    cnx.body = data
    }
    catch(error){
        console.log(error.status)
        console.log(error.message)
        if(error.status === undefined){
            error.status = 500;
            throw error;
        }
        cnx.response.status = error.status
        cnx.body = {message:error.message, status:error.status}
    }
})






// // note that we have injected the body pasrser only in the POST request
// router.post('/', bodyParser(), createArticle)
// router.put('/:id', bodyParser(), updateArticle)
// router.del('/:id', deleteArticle)


// function getAll(cnx, next){
//     cnx.body = articles
// }

// function getById(cnx, next){
//     let id = cnx.params.id

//     if((id < articles.length+1) && (id > 0))
//         cnx.body = articles[id-1]

//     else
//         cnx.body = {message:'NOT Found'}
// }

// function createArticle(cnx, next){
//     let newArticle = {title:cnx.request.body.title, fulltext:cnx.request.body.fullText}
//     articles.push(newArticle)
//     cnx.body = {message:"added successfully"}
// }

// function updateArticle(cnx, next){
   
//     const id = cnx.params.id 
//     // Hard coded 
//     const updatedArticle = {
//     //    id:cnx.params.id,
//     title:cnx.request.body.title, 
//     fullText:cnx.request.body.fullText
//     };
//     articles.splice(0,1,updatedArticle);
    
//      cnx.body = {message:'successfully updated'}
//   }

//   function deleteArticle(cnx, next){   
//         const id = cnx.params.id 
     
//         const delArticle = {title:cnx.request.body}
//         console.log(delArticle)
        
//         // if (cnx.params.id === -1)
//         articles.splice(id-1,1,delArticle);
        
//         cnx.body = {message:'successfully deleted'}
//     }

module.exports = router
