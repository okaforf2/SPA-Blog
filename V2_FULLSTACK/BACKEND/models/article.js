const mysql = require('promise-mysql')
const info = require('../config')

exports.getById = async (id) => {
    try {

        const connection = await mysql.createConnection(info.config)

        let sql = `SELECT *  FROM articles 
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

exports.getAll = async (page, limit, order) => {
    try{
        let connection = await mysql.createConnection(info.config)
        let sql = `SELECT * FROM articles`
        
        let data = await connection.query(sql)
        await connection.end()
        return data
    } catch (error) {
        if(error.status === undefined)
            error.status = 500
        throw error
    }
}


exports.add = async (article) => {
    try {
        if(!articles.title === undefined){
            throw {message: 'Article title is required', status:400}
        }

        if(!articles.all_text === undefined){
            throw {message:'text is required', status:400};
        }

        if(!articles.summary === undefined){
            throw {message:'password is required', status:400};
        }

        if(!articles.image_url === undefindd){
            throw {message:'Image is required', status:400};
        }


        const connection = await mysql.createConnection(info.config)

        let sql =`INSERT INTO articles
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

exports.putById = async (id, title, all_text, summary, image_url) => {
    try {
        const connection = await mysql.createConnection(info.config)

        // let sql2 = `SELECT ID from articles WHERE ID = \"${id}\"`
        //             // const data2 = await connection.query(sql2)
        //             let data2 = await connection.query(sql2).then(res => { return JSON.stringify(res[0].ID)});

        //             await connection.end()
    
                    let sql = `UPDATE articles SET title = \'${title}\', all_text = \'${all_text}\', summary = \'${summary}\', image_url = \'${image_url}\'   WHERE ID = \'${id}\'`

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
        let sql = `DELETE FROM articles WHERE ID = \'${id}\'`

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