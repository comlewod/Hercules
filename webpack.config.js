const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

var config = {
	entry: {
		app: ['webpack-hot-middleware/client?noInfo=true&reload=true', path.resolve(__dirname, 'src/app.js')],
		//list: ['webpack-hot-middleware/client?noInfo=true&reload=true', path.resolve(__dirname, 'src/list.js')],
	},
	output: {
		publicPath: '/',
		path: path.resolve(__dirname, 'dist'),	//需要传入绝对路径
		filename: '[name]-bundle.js'
	},
	resolve: {
		extensions: ['.js', '.jsx', '.less']	//设置require或import的时候可以不需要带后缀
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,		//js或者jsx文件
				use: [{
					loader: 'babel-loader',	//加载babel是babel-loader的缩写
					options: {
						presets: ['babel-preset-react']	//需要这个插件对文件内容进行处理
					}
				}]
			},
			{
				test: /\.less$/,
				use: [
					miniCssExtractPlugin.loader,	//将css文件单独打包
					//'style-loader',	//将css模块写入style标签内
					'css-loader',	//将css转成commonjs模块
					'less-loader',	//将less转成css
				]
			}
		]
	},
	externals: {
		'react': 'React',		//将script引入的react的中全局变量React变成webpack的模块react
		'react-dom': 'ReactDOM'
	},
	plugins: [
		new htmlWebpackPlugin({
			title: 'My app',
			template: 'src/template.html'
		}),
		//单独生成css文件
		new miniCssExtractPlugin({
			filename: "[name].css"
		}),
		//实现浏览器刷新必写
		new webpack.HotModuleReplacementPlugin(),	
	],
	mode: "development"
};

module.exports = config;
