const mysql = require('promise-mysql')
const bcrypt = require('bcryptjs');

const info = require('../config')

exports.getById = async (id) => {
    try {

        const connection = await mysql.createConnection(info.config)

        let sql = `SELECT *  FROM users 
                     WHERE id = ${id}
                    `
                    const data = await connection.query(sql)

                    await connection.end()

                    return data
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

// exports.getAll = async (page, limit, order) => {
//     try{
//         let connection = await mysql.createConnection(info.config)
//         let sql = `SELECT * FROM users`
        
//         let data = await connection.query(sql)
//         await connection.end()
//         return data
//     } catch (error) {
//         console.log(error)
//         ctx.throw(500, 'An Error has occured')
//     }
// }
exports.add = async (users) => {
    try {

        if(users.first_name === undefined){
            throw {message:"first name is required", status:400}
        }

        if(users.user_name === undefined){
            throw {message:"user name is required", status:400}
        }

        // if(users.about === undefined){
        //     throw {message:"text is required", status:400}
        // }

        if(users.password === undefined){
            throw {message:"password is required", status:400}
        } else {
            if(users.password.length < 6){
                throw {message: "password must be more than 6 characters long", status:400}
            }
        }

        // if(users.email === undefined){
        //     throw {message:"email is required", status:400}
        // }
    

// email should be a valid email address
// we will use a regular expression to validate the email format
var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(String(users.email).toLowerCase()))
            throw {message:'invalid email address format', status:400};

            let sql = `SELECT email from users WHERE
                    email = \'${users.email}\'`;

        const connection = await mysql.createConnection(info.config)
        let data = await connection.query(sql);

        //if the query return a record then this email has been used before
        if(data.length){
            //first close the connection as we are leaving this function
            await connection.end();
            //then throw an error to leave the function
            // throw {message:'email address already in use', status:400};
        }

        //hash the password using bcryptjs package
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(users.password, salt);

        //create a new object to hold users final data
        let userData = {
            email: users.email, 
            password: hash,
            first_name: users.first_name,
            user_name: users.user_name,
            date_registration: new Date()
        }

        sql =`INSERT INTO users
        SET ?
        `
        data = await connection.query(sql, userData)
        
        // let sql1 = `Select * FROM users WHERE email = \'${userData.email}\' `

        // let data2 = await connection.query(sql1)    
        
        
        await connection.end()
        // return data2
        return data

    } catch (error) {
        //in case we caught an error that has no status defined then this is an error from our database
        //therefore we should set the status code to server error
        if(error.status === undefined)
            error.status = 500;
        throw error;
    }
}

exports.putById = async (id, first_name, user_name, about, password, email, avatar_url) => {
    try {
        const connection = await mysql.createConnection(info.config)
    
                    let sql = `UPDATE users SET first_name = \'${first_name}\', user_name = \'${user_name}\', about = \'${about}\', password = \'${password}\', email = \'${email}\', avatar_url = \'${avatar_url}\' WHERE ID = \'${id}\'`

                    let data = await connection.query(sql);
            
                    await connection.end();
            
                    return data;

        
    } catch (error) {
        console.log(error)
        ctx.throw(500, 'An Error has occured')
    }
}

exports.deleteById = async (id) => {
    try {
        const connection = await mysql.createConnection(info.config)

        //this is the sql statement to execute
        let sql = `DELETE FROM users WHERE ID = \'${id}\'`

        let data = await connection.query(sql);

        await connection.end();

        return data;
    }
    catch (error) {
        //if an error occured please log it and throw an exception
        if(error.status === undefined){
            error.status = 500;
            throw error;
        }
        throw error
    }
}