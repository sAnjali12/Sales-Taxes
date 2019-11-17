const express = require('express');
var cartDb=require("../Modle/cartproducts");
var products = require("./calculate.js")
var cart = express.Router();
cart.use(express.json())


function ProDetail(product){
    var tax=0;
    var price=0;
    var totalPro={};
    var productWithtax=[];
    for (var i=0;  i<product.length; i++){

        var productDetails=products(product[i])
        tax=tax+productDetails["tax"]
        price=price+productDetails["quantityPrice"]

        productWithtax.push(productDetails)
    }totalPro["totalBill"]=price
    totalPro["totalTax"]=tax
    productWithtax.push(totalPro);
    return productWithtax;

}  


cart.get("/:name/:quantity",function(req,res){
    var productName = req.params.name;
    var productQuantity = req.params.quantity;
    var id=req.body.No;
    var products=cartDb.selectData(productName)
    products.then((data)=>{
    inserting=cartDb.insertion(data[0],productQuantity,id)
    return inserting
    }).then((result)=>{
        res.json("data inserted")
    })
    .catch((err)=>{
        res.send(err)
    });

});


cart.get("/produts",(req,res)=>{

    var cartProduts=cartDb.getData()
    cartProduts.then((productsD)=>{
    data = ProDetail(productsD)
    res.json(data)
    }).catch((err)=>{
        console.log(err)
        res.send(err)
    })
});


cart.get("/:id",(req,res)=>{
    var id  = req.params.id
    var data = cartDb.selectproduct(id)
   data.then((Response)=>{
       res.json(Response)
   }).catch((err)=>{
       console.log(err)
       res.send(err)
   })
});




module.exports = cart;

















