const path = require('path');
const express = require('express');
//const webpack = require('webpack');
//const webpackDevMiddleware = require('webpack-dev-middleware');
//const webpackHotMiddleware = require('webpack-hot-middleware');
const openBrowser = require('react-dev-utils/openBrowser');

var app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
	//不使用渲染引擎，所以使用sendFile
	res.sendFile(__dirname + '/dist/index.html');
});

//app.listen(PORT, () => {
//	if( openBrowser('http://localhost:' + PORT) ){
//		console.log('The browser tab has benn opened');
//	}
//});

module.exports = app;
