const express = require('express');
const app = express();
var mysql = require('mysql');
app.use(express.json())
var knex = require('./conection.js');

function getTax(price,tax){
    return price*tax/100
}

app.post("/addProduct",function(req,res){
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



app.get("/getproduct",function(req,res){
    knex.select("product","price","Tax","TotalPrice").from("productsBill")
    .then((data)=>{
        salesTax = [],prices=[],totalPrices=[],products=[]
        for (var k of data){
            totalPrices.push(k["TotalPrice"])
            salesTax.push(k["Tax"])
            prices.push(k["price"])
            products.push(k["product"])
        }
        var sum = 0
        allProduct=[]
        tax = 0
        price=0
        totalAmount={}
        for (var index=0; (index<sales_tax.length);index++){
            amount = {}
            amount.product=products[index]
            amount.price=prices[index]
            amount.tax=salesTax[index]
            amount.TotalPrice=totalPrices[index]
            sum = sum+totalPrices[index]
            price=price+prices[index]
            tax=tax+salesTax[index]
            allProduct.push(amount)
            
        }   
        totalAmount.grandTotal=price
        totalAmount.salesTax=tax
        totalAmount.TotalPrice=sum
        allProduct.push(totalAmount)
        res.send(allProduct)
        
    }).catch((err)=>{
        console.log("oops!! something went wrong")
    })
})


app.listen(8001,() =>{
    console.log("listining 8001....@@@@@@ ");
});