const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const webpackConfig = require('./webpack.config.js');

var compiler = webpack(webpackConfig);

var app = express();

app.use(webpackDevMiddleware(compiler, {
	publicPath: webpackConfig.publicPath,
	quiet: true,
}));

app.use(webpackHotMiddleware(compiler, {
	log: false,
	heartbeat: 2000
}));

app.get('/', (req, res) => {
	res.send('haha');
});

module.exports = app;
