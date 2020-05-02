const mysql = require('promise-mysql')
const info = require('../config')

exports.getById = async (id) => {
    try {

        const connection = await mysql.createConnection(info.config)

        let sql = `SELECT *  FROM comments
                     WHERE id = ${id}
                    `
                    const data = await connection.query(sql)

                    await connection.end()

                    return data
    } catch (error) {
        console.log(error)
        ctx.throw(500, 'An Error has occured')
    }
}

exports.getAll = async (page, limit, order) => {
    try{
        let connection = await mysql.createConnection(info.config)
        let sql = `SELECT * FROM comments`
        
        let data = await connection.query(sql)
        await connection.end()
        return data
    } catch (error) {
        console.log(error)
        ctx.throw(500, 'An Error has occured')
    }
}

exports.add = async (article) => {
    try {
        const connection = await mysql.createConnection(info.config)

        let sql =`INSERT INTO comments
        SET ?
        `
        let data = await connection.query(sql, article)
        await connection.end()
        return data
        
    } catch (error) {
        console.log(error)
        ctx.throw(500, 'An Error has occured')
    }
}

exports.putById = async (id, allText) => {
    try {
        const connection = await mysql.createConnection(info.config)

        // let sql2 = `SELECT ID from articles WHERE ID = \"${id}\"`
        //             // const data2 = await connection.query(sql2)
        //             let data2 = await connection.query(sql2).then(res => { return JSON.stringify(res[0].ID)});

        //             await connection.end()
    
                    let sql = `UPDATE articles SET allText = \'${allText}\' WHERE ID = \'${id}\'`

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
        let sql = `DELETE FROM comments WHERE ID = \'${id}\'`

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