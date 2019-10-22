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

knex.schema.createTable('productsBill', (table) => {
      table.increments('No')
      table.string('Product')
      table.string('imported')
      table.string('category')
      table.float('Price')
      // table.float('Tax')
      // table.float('TotalPrice')
    }).then(() => console.log("table created"))
      .catch((err) => { console.log(err); throw err })
      .finally(() => {
          knex.destroy();
    });