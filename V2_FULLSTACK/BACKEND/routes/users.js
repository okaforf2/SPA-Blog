const Router = require('koa-router')
const model = require('../models/users')

//Prefixed all routes with below
const router = Router({
    prefix: '/api/v1.0/users'
})

const bodyParser = require('koa-bodyparser')

// Routes will go here
// router.get('/', async (cnx, next) => {
//     let id = cnx.params.id
//     cnx.body = await model.getAll(id)
// })

// the id should be a number greater than or equal to 1
router.get('/:id([0-9]{1,})', async (cnx, next) => {
    let id = cnx.params.id
    let data = await model.getById(id)
    // cnx.body = await model.getById(id)

    if(data.length === 0){
        cnx.response.status = 404
        cnx.body = {message: "user not found"}
    } else
    cnx.body = data
})

router.post('/', bodyParser(), async (cnx, next) => {

        // console.log(cnx.request.body)

    let newUser = {
                      first_name:cnx.request.body.first_name === undefined ? undefined: cnx.request.body.first_name, 
                      user_name:cnx.request.body.user_name === undefined ? undefined: cnx.request.body.user_name,
                      about:cnx.request.body.about === undefined ? undefined: cnx.request.body.about,
                      email:cnx.request.body.email === undefined ? undefined: cnx.request.body.email,
                      password:cnx.request.body.password === undefined ? undefined: cnx.request.body.password,
                      avatar_url:cnx.request.body.avatar_url === undefined ? undefined: cnx.request.body.avatar_url
                    }
try{
    // let data = await model.add(newUser)
    // cnx.body = {message:"user was added successfully", userData: data}
    // cnx.response.status = 201
    // console.log('user added successfully')
    // console.log(data)

    await model.add(newUser);
      cnx.response.status = 201;
      cnx.body = {message:"user was added successfully"};


}
catch(error){
    cnx.response.status = error.status
    cnx.body = {message:error.message}
}
})

router.put('/:id([0-9]{1,})',bodyParser(), async (cnx, next) => {
    {
    const id = cnx.params.id 
        let first_name = cnx.request.body.first_name
        let user_name = cnx.request.body.user_name
        let about = cnx.request.body.about
        let password = cnx.request.body.password
        let email = cnx.request.body.email
        let avatar_url = cnx.request.body.avatar_url

        let data = await model.putById(id,first_name,user_name, about, password, email, avatar_url)
        cnx.body = data
    }
    
})

router.del('/:id', async (cnx, next) => {
    const id = cnx.params.id 
     
    let delUser = await model.deleteById(id)
    console.log(delUser)
    
    await model.deleteById(delUser)
    cnx.body = {message:"added successfully"}
})








module.exports = router
