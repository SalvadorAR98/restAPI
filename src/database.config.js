const {createPool} = require("mysql2/promise");


const pool = createPool({
    host: `${process.env.DB_HOST}`,
    user: `${process.env.DB_USER}`,
    password: `${process.env.DB_PASSWORD}`,
    database: `${process.env.DB_NAME}`
})

const checkDB = async ()=>{
    try {
        console.log({host: `${process.env.DB_HOST}`,
            user: `${process.env.DB_USER}`,
            password: `${process.env.DB_PASSWORD}`,
            database: `${process.env.DB_NAME}`
        })
        await pool.query('SELECT 1')
        console.log("DB is connected")
    } catch (error) {
        console.log(error)
    }
}

module.exports ={
    checkDB,
    pool
}