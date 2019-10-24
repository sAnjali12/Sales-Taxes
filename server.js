const express = require('express');
const app = express();
var productBill = require('./Routes/product');

// var cartProducts = require('./Routes/cartProducts');
app.use("/product",productBill);

var cartProducts = require('./Routes/cartProducts');
app.use("/cartProducts",cartProducts)



  app.listen(8001,() =>{
    console.log("listining 8001....");
});




