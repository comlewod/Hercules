const path = require('path');
const webpack = require('webpack');
//var app = require('./app');
var webpackConfig = require('./webpack.config.js');

const hotQuery = "webpack-hot-middleware/client?noInfo=true&reload=true";

webpackConfig.mode = "development";
webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());	//通过express中间件实现热替换时，实现浏览器刷新必写

Object.keys(webpackConfig.entry).forEach((key) => {
	webpackConfig.entry[key] = [hotQuery, webpackConfig.entry[key]];
});

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

app.listen(5000);

