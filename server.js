const express = require('express');
const app = express();
var productBill = require('./Routes/productBill');
app.use("/product",productBill);

  app.listen(8001,() =>{
    console.log("listining 8001....");
});



