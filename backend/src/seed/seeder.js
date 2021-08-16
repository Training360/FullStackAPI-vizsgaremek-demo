const fsp = require('fs').promises;
const ProductModel = require('../models/product.model');

(async () => {
    const productsJson = await fsp.readFile('src/seed/products.json', 'utf8');
    const products = JSON.parse(productsJson);
    await ProductModel.insertMany(products);
})();
