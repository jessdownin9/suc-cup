const express = require("express");
const productsRouter = express.Router();
const db = require('../db/index');
  
productsRouter.get('/', (req, res) => {
    db.query('SELECT * FROM products', (err, result) => {
        if (err) return next(err);
        console.log(result.rows);
        res.send(result.rows);
    })
});

module.exports = productsRouter;