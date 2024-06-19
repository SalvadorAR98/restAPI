const express = require("express")
const dotenv = require("dotenv")
dotenv.config({path: '.env'})
const {checkDB} = require("./src/database.config")


checkDB()

const PORT = process.env.APP_PORT | 3000
const app =express()

app.get("/",(req,res)=>{
    res.send("hola")
})

app.listen(PORT,() =>{
    console.log(`Server on port 3000 ${PORT}`)
})