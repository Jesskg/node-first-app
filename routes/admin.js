const path = require('path');
const express = require('express');

const productsController = require('../controllers/products');

const adminRouter = express.Router();

// /admin/product-page => GET
adminRouter.get('/product-page', productsController.getAddProduct);


// /admin/product => POST
adminRouter.post('/product-page', productsController.postAddProducts);

module.exports = adminRouter;