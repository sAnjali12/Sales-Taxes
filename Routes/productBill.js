const express = require('express');
var router = express.Router();
const app = express();
var mysql = require('mysql');
app.use(express.json())
// var knex = require('./conection.js');
// const productWithtax = require('./calculate')



router.post("/add",function(req,res){
    categories=["book","food","medicine"]
    productDetails={"Product":req.body.Product,"imported":req.body.imported,"category":req.body.category,"Price":req.body.Price}

  
})


