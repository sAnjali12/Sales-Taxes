const express = require('express');
var product = express.product();
product.use(express.json())
const add = require("../Modle/product");

product.post("/add", function (req, res) {
    console.log(req.body.name);
    let productDetails = {
        "name": req.body.name,
        "imported": req.body.imported,
        "category": req.body.category,
        "price": req.body.price
    }

    data = productDetails.imported.toString();
    productDetails.imported = data
    let resp = add.insertData(productDetails);
    res.json(resp);
})


module.exports = product;

