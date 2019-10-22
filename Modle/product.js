var knex = require('../conection.js');

let insertData = (productDetails)=>{
    knex('products').insert(productDetails)
        .then((result)=>{
            return { success: true, message: 'ok' };
        }).catch((err)=>{
            return err;
        });

}

let selectData = (productDetails,productQuantity)=>{
    knex.select('*').from('products').where('name',productName).then((data)=>{
        var price = productDetails.price;
        console.log(price)
        var imported = data.imported
        var totalPrice = price*productQuantity;
        console.log(productQuantity)
        data["price"] = totalPrice;
        data["quantity"] = productQuantity;
        data["productName"] = productName;
        data["imported"] = imported
        knex('Cart').insert(data).then((result)=>{
            return { success: true, message: 'ok' };
        }).catch((err)=>{
            return err;
        });

        })
}

module.exports = {insertData,selectData}
