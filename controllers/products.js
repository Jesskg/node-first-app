const Product = require('../models/product');

exports.getAddProduct =  (req, res, next) => {
    res.render('product-page.pug', { 
        pageTitle: 'Add Product', 
        path: '/admin/product-page',
        activeProductsPage: true,
        formsCSS: true,
        productCSS: true
    });
};

exports.postAddProducts = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getProducts =  (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop.pug', {
        prods: products, 
        pageTitle: 'Jesses Shop', 
        path: '/', hasProducts: 
        products.length > 0,
        activeShop: true,
        productCSS: true
        });
    });
};