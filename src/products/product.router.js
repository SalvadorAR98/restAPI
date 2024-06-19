const { Router } = require("express");
const { getProducts, createProducts } = require("./product.controller");

const router = Router()

router.get("/",getProducts)
router.post("/",createProducts)

module.exports = router