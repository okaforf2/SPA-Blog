const mysql = require('promise-mysql')
const info = require('../config')

exports.createTables = async (id) => {
    try{
        const connection = await mysql.createConnection(info.config)

        let sql = `CREATE TABLE articles (
            ID INT NOT NULL AUTO_INCREMENT,
            title VARCHAR(32),
            allText TEXT,
            published TINYINT(1),
            views INT,
            imageURL VARCHAR(2048),
            created DATETIME,
            PRIMARY KEY (ID)
        )`
        await connection.query(sql)

        sql = `CREATE TABLE users (
            ID INT NOT NULL AUTO_INCREMENT,
            email VARCHAR(32),
            forename VARCHAR(16),
            surname VARCHAR(16), 
            pwd VARCHAR(256), 
            pwdSalt VARCHAR(32),
            created DATETIME,
            PRIMARY KEY (ID)
        )`
        await connection.query(sql)

        return {message:"created sucessfully"}
    
    } catch (error) {
        console.log(error)
        CanvasRenderingContext2D.throw(500, 'An Error has occured')
    }
}