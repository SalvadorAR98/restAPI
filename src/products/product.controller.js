const { pool } = require("../database.config")
const getProducts = async (req,res)=>{
    try {
        const [rows] = await pool.query("SELECT * FROM products;")
        res.status(200).json(rows)
    } catch (error) {
        console.log(error)
        return res.status(500)
    }
}

const createProducts = async (req,res)=>{
    try {
        const { name, description } = req.body
        const insert = await pool.query(`INSERT INTO products (nombre,descripcion) VALUES('${name}','${description}');`)
        const [rows] = await pool.query(`SELECT * FROM products WHERE idProduct = ${insert[0].insertId};`)
        return res.status(201).json(rows)

    } catch (error) {
        console.log(error)
        return res.status(500)
    }
}

module.exports={
    getProducts, createProducts
}