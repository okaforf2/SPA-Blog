// import koa
const Koa = require('koa')
// import koa-router which is used to route user request to its path 
const Router = require('koa-router')
// import koa-body parser which is used to extract parameters from request
const bodyParser = require('koa-bodyparser')
const cors = require('@koa/cors')

const app = new Koa()
const router = new Router

const welcome = require('./routes/welcome')
const articles = require('./routes/article')
const admin = require('./routes/admin')
const users = require('./routes/users')
const categories = require('./routes/categories')
const comments = require('./routes/comments')
const likes = require ('./routes/likes')
const pinneds = require ('./routes/pinneds')
// welcomeAPI = ((cnx, next) => {
//     cnx.body = {message: 'Wag1'}
// })
// console.log('working')

// const articles = require('./routes/article')
// app.use(articles.routes())

// router.get('/api/v1.0', welcomeAPI)

//use the root routes
app.use(cors())
app.use(welcome.routes())
app.use(articles.routes())
app.use(admin.routes())
app.use(users.routes())
app.use(categories.routes())
app.use(comments.routes())
app.use(likes.routes())
app.use(pinneds.routes())

const port = process.env.PORT || 3000
//run the server
app.listen(port)



