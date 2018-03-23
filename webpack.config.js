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
						presets: ['babel-preset-react']	//需要这个插件对文件内容进行处理
					}
				}]
			},
			{
				test: /\.less$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'less-loader'
					}
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
	],
};

module.exports = config;
