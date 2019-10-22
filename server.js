const express = require('express');
const app = express();
var productBill = require('./products/productBill');
app.use("/productBill",productBill);



  app.listen(8001,() =>{
    console.log("listining 8001....");
});




