const express = require('express');
const router = express.Router();

const product_controller = require('../controllers/product.controller');

router.post('/create', product_controller.product_create);
router.get('/product/:id', product_controller.product_show);

module.exports = router;