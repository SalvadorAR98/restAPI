const express = require("express")
const dotenv = require("dotenv")
dotenv.config({path: '.env'})
const {checkDB} = require("./src/database.config")
const RouterProducts = require("./src/products/product.router")


checkDB()

const PORT = process.env.APP_PORT | 3000
const app =express()

app.get("/",(req,res)=>{
    res.send("hola")
})

app.use(express.json())
app.use("/products",RouterProducts)

app.listen(PORT,() =>{
    console.log(`Server on port 3000 ${PORT}`)
})