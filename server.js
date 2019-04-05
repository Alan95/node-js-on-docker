'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const PORT = 8080;
const HOST = '0.0.0.0';
const path = __dirname + '/views/';

const product = require('./routes/product.route');
const app = express();

app.use('/products', product);

app.listen(PORT, HOST);
console.log(`Running on https://${HOST}:${PORT}`);

