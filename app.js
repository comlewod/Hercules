const path = require('path');
const express = require('express');

var app = express();

app = require('./middlewares/app')(app);

module.exports = app;
