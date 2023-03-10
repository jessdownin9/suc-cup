const express = require("express");
const productsRouter = express.Router();
const db = require('../db/index');
  
productsRouter.get('/', (req, res) => {
    db.query('SELECT * FROM products', (err, result) => {
        if (err) console.log(err);
        res.send(result);
    })
});

module.exports = productsRouter;