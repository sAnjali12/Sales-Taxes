const express = require('express');
const app = express();
var mysql = require('mysql');
app.use(express.json())

var knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : 'navgurukul',
      database : 'SalesTaxProject'
    }
})
console.log('database is connected now!');

knex.schema.createTable('products', (table) => {
      table.increments('No')
      table.string('name')
      table.string('imported')
      table.string('category')
      table.float('price')
      // table.float('Tax')
      // table.float('TotalPrice')
    }).then(() => console.log("table created"))
      .catch((err) => { console.log(err); throw err })
      .finally(() => {
          knex.destroy();
    });




// FOR CART TABLE...

knex.schema.createTable('Cart', (table) => {
  table.increments('No')
  table.string('productName')
  table.string('imported')
  table.string('quantity')
  table.float('price')
  // table.float('Tax')
  // table.float('TotalPrice')
}).then(() => console.log("table created"))
  .catch((err) => { console.log(err); throw err })
  .finally(() => {
      knex.destroy();
});

