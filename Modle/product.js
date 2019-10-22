var knex = require('../conection.js');

let insertData = (productDetails)=>{
    knex('products').insert(productDetails)
    .then((result)=>{
        console.log("yaya hai")
        return { success: true, message: 'ok' };
    }).catch((err)=>{
        return err;
    });

}
module.exports = insertData