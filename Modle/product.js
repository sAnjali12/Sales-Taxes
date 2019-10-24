var knex = require('../conection.js');


let insertData = (productDetails)=>{
    return knex('products').insert(productDetails)       
}




let selectData = (productName)=>{
    return knex.select('*').from('products').where('name',productName)



    }


module.exports = {insertData, selectData}






















































// let selectData = (productDetails,productQuantity)=>{
//     knex.select('*').from('products').where('name',productName).then((data)=>{
//         return data
//         var price = productDetails.price;
//         console.log(price)
//         var imported = data.imported
//         var totalPrice = price*productQuantity;
//         console.log(productQuantity)
//         data["price"] = totalPrice;
//         data["quantity"] = productQuantity;
//         data["productName"] = productName;
//         data["imported"] = imported
//         knex('Cart').insert(data).then((result)=>{
//             return { success: true, message: 'ok' };
//         }).catch((err)=>{
//             return err;
//         });

//         })
// }

