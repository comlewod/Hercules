const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const hotQuery = "webpack-hot-middleware/client?noInfo=true&reload=true";
let webpackConfig = require('./webpack.config.js');

webpackConfig.mode = "development";
webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());	//通过express中间件实现热替换时，实现浏览器刷新必写

Object.keys(webpackConfig.entry).forEach((key) => {
	webpackConfig.entry[key] = [hotQuery, webpackConfig.entry[key]];
});

let compiler = webpack(webpackConfig);
let app = express();

//开发环境使用这两个中间件
app.use(webpackDevMiddleware(compiler, {
	publicPath: webpackConfig.publicPath,
	quiet: true,
}));

app.use(webpackHotMiddleware(compiler, {
	log: false,
	heartbeat: 2000
}));

//优先获取webpack的静态资源，所以express.static要写在后面，且静态资源要路径相同
app.use(express.static(path.join(__dirname, 'dist')));	

app.get('*', (req, res) => {
	//不使用渲染引擎，所以使用sendFile
	res.sendFile(__dirname + '/dist/index.html');
});

app.listen(5000);

