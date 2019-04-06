const Product = require('../models/product.model');

exports.test = function (req, res) {
    res.send('Test');
}

exports.product_create = function (req, res, next) {
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    )

    product.save(function (err) {
        if (err) {
            next(err);
        }
        res.send('201');
    })
};