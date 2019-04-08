const Product = require('../models/product.model');
const ObjectId = require('mongodb').ObjectID;

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

exports.product_show = function (req, res, next) {
    const product = Product.findOne({ _id: ObjectId(req.params.id)}, function (err, result) {
        if (err) {
            res.status(400).send({'error': err});
        } 
        res.status(200).send(result);
    });
}