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

exports.product_edit = function(req, res, next) {
    Product.findOneAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) {
            res.status(400).send({'error': err});
        }
        res.status(200).send('Product updated');
    }


    )
}

exports.product_delete = function(req, res, next) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.status(400).send({'error': err});
        }
        res.status(200).send('Deleted successfully!');
    })
};