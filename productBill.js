const express = require('express');
const app = express();
var mysql = require('mysql');
app.use(express.json())
var knex = require('./conection.js');

function getTax(price,tax){
    return price*tax/100
}

app.post("/add-products",function(req,res){
    categories=["book","food","medicine"]
    productDetails={"Product":req.body.Product,"imported":req.body.imported,"category":req.body.category,"Price":req.body.Price,"Tax":req.body.Tax,"TotalPrice":req.body.TotalPrice}
    var salseTax=0;
    if(productDetails.imported){
        salseTax+=getTax(productDetails["Price"],5);
    }
    if(!categories.includes(productDetails.category)){
        salseTax+=getTax(productDetails["Price"],10);
    }
   
    productDetails["Tax"]=salseTax
    productDetails["TotalPrice"]=productDetails["Price"]+salseTax

    knex('productsBill').insert(productDetails)
    .then((result)=>{
        return res.json({ success: true, message: 'ok' });
    }).catch((err)=>{
        res.send(err)
    });
})
app.listen(8001,() =>{
    console.log("listining 8001.... ");
});