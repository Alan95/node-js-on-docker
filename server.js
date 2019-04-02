'use strict';

const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';
const path = __dirname + '/views/';

const app = express();
app.get('/', (req, res) => {
	res.sendFile(path + 'index.html');
});

app.listen(PORT, HOST);
console.log(`Running on https://${HOST}:${PORT}`);

