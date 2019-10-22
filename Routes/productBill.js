const express = require('express');
var router = express.Router();
const app = express();
var mysql = require('mysql');
router.use(express.json())
const add = require("../Modle/product");

router.post("/add", function (req, res) {
    console.log(req.body.name);
    let productDetails = {
        "name": req.body.name,
        "imported": req.body.imported,
        "category": req.body.category,
        "price": req.body.price
    }
    let resp = add(productDetails);
    res.json(resp);
})

module.exports = router;

