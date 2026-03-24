const path = require('path');
const express = require('express');

const rootDir = require('../utilitites/path');

const adminRouter = express.Router();

const products = [];

// /admin/product-page => GET
adminRouter.get('/product-page', (req, res, next) => {
    res.render('product-page.pug', { 
        pageTitle: 'Add Product', 
        path: '/admin/product-page',
        activeProductsPage: true,
        formsCSS: true,
        productCSS: true
    });
});


// /admin/product => POST
adminRouter.post('/product-page', (req, res, next) => {
    products.push({title: req.body.title}); //adds a new product to the products array with the title from the request body
    res.redirect('/'); //redirects the client to the specified URL
})

exports.routes = adminRouter;
exports.products = products;