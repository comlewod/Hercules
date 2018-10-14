const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const webpackConfig = require('./webpack.config.js');

var compiler = webpack(webpackConfig);

var app = express();

//开发环境使用这两个中间件
app.use(webpackDevMiddleware(compiler, {
	publicPath: webpackConfig.publicPath,
	quiet: true,
}));

app.use(webpackHotMiddleware(compiler, {
	log: false,
	heartbeat: 2000
}));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	//不使用渲染引擎，所以使用sendFile
	res.sendFile(__dirname + '/dist/index.html');
});

module.exports = app;
