const path = require('path');
const express = require('express');

const rootDir = require('../utilitites/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    const products = adminData.products;
    res.render('shop.pug', {
        prods: products, 
        pageTitle: 'Jesses Shop', 
        path: '/', hasProducts: 
        products.length > 0,
        activeShop: true,
        productCSS: true
    });
});

module.exports = router;