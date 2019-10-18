const express = require('express');
const app = express();
var mysql = require('mysql');
app.use(express.json())
var knex = require('./conection.js');

// console.log('database is connected now!');


app.post('/product',(req,res)=>{
    var stages = ["book","medicine","food"]
    var obj={Product:req.body.Product,price:req.body.price,Country:req.body.Country,stage:req.body.stage}
    if(stages.hasOwnProperty((obj.stage))&&("India").hasOwnProperty(obj.Country)){
        obj.SalesTaxes=0.00;
        Total=obj.price
        obj.totalPrice=Total

    // }else if(["book","medicine","food"].includes(obj.stage) && (["OtherCountry"].includes(obj.Country))){
    //     obj.SalesTaxes=5.00;
    //     tax=obj.price*obj.SalesTaxes/100;
    //     obj.SalesTaxes=tax
    //     obj.totalPrice=tax+obj.price;

    }if(["general"].includes(obj.stage)&&("India").includes(obj.Country)){
        obj.SalesTaxes=10.00;
        tax=obj.price*obj.SalesTaxes/100;
        obj.SalesTaxes=tax
        obj.totalPrice=tax+obj.price;

    }else{
        obj.SalesTaxes=15.00;
        tax=obj.price*obj.SalesTaxes/100;
        obj.SalesTaxes=tax
        obj.totalPrice=tax+obj.price;
    }
    knex.select('*').from('SalesTax').insert(obj)
    .then((result)=>{
        return res.send("Iserted data!!!!...")
    }).catch((err)=>{
        return res.send(err);
    })
})

app.get("/get_product",function(req,res){
    knex.select("Product"," price"," SalesTaxes"," totalPrice").from("SalesTax").then((result)=>{
        tax_list=[], price_list=[], total_list=[], pro_list=[]

        for (index of result){
            pro_list.push(index["Product"])
            tax_list.push(index[" SalesTaxes"])
            price_list.push(index["price"])
            total_list.push(index["totalPrice"])
        }
        count=0
        tax_total = 0
        list=[]
        grand_obj={}
        for (var i=0; (i<tax_list.length); i++){
            data={}
            data.product=pro_list[i]
            data.price=price_list[i]
            data.tax=tax_list[i]
            data.total_price=total_list[i]
            tax = total_list[i] - price_list[i]
            console.log(tax)
            tax_total = tax + tax_total
            console.log(tax_total)
            count=count+total_list[i]
            list.push(data)
        }
        grand_obj.grand_total=count
        grand_obj.tax_total = tax_total
        list.push(grand_obj)
        res.send(list)
    
    }).catch((err)=>{
        res.send("their is something wrong")
    })
})

app.listen(8001,() =>{
    console.log("listining 8001.... ");
});