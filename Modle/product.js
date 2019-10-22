var knex = require('./conection.js');

let insertData = (productDetails)=>{
    knex('productsBill').insert(productDetails)
    .then((result)=>{
        return res.json({ success: true, message: 'ok' });
    }).catch((err)=>{
        return err;
    });

}
module.exports = insertData