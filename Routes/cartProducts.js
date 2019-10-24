const express = require('express');
var cart = express.Router();
cart.use(express.json())
const add = require("../Modle/product");


cart.get("/:name/:quantity",function(req,res){
    productName = req.params.name;
    productQuantity = req.params.quantity;
    let resp  = add.selectData(productName).then((data)=>{
        return res.json(data)
    }).catch((err)=>{
        return(err);
    })
});
    

    // let postData = add.selectData(productName,productQuantity)
    // console.log('DATA POST.....')






module.exports = cart