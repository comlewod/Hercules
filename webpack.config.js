const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

var config = {
	entry: path.resolve(__dirname, 'src/app.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,		//js或者jsx文件
				use: [{
					loader: 'babel-loader',	//加载babel是babel-loader的缩写
					options: {
						presets: ['babel-preset-react']
					}
				}]
			}
		]
	},
	plugins: [
		new htmlWebpackPlugin(),
	],
};

module.exports = config;
