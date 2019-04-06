'use strict';

const PORT = 8081;
const HOST = '0.0.0.0';
const path = __dirname + '/views/';
const dotenv = require('dotenv');

const express = require('express');
const bodyParser = require('body-parser');

const product = require('./routes/product.route'); // Import routes
dotenv.config();
const app = express();

//DB SETUP
const mongoose = require('mongoose');
const mongoDB = process.env.MONGODB_URI;

mongoose.connect(mongoDB, {useNewUrlParser: true});
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

app.listen(PORT, HOST);
console.log(`Running on https://${HOST}:${PORT}`);

