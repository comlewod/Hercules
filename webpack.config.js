const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

var config = {
	devtool: 'source-map',	//问题可以直接定位到源码，而不是压缩后的代码 
	entry: {
		app: path.resolve(__dirname, 'src', 'app.js'),
		//有多少个对象就会引用多少个打包后的js文件
		//app: [hotQuery, path.resolve(__dirname, 'src/app.js')],
		//list: [hotQuery, path.resolve(__dirname, 'src/list.js')],
		vendors: ['react', 'react-dom', 'react-router-dom']
	},
	output: {
		publicPath: '/dist/',	//开发环境和生产环境不一样，线上可能是使用cdn，该值会直接生成在资源前面
		path: path.resolve(__dirname, 'public', 'dist'),	//需要传入输出文件绝对路径
		chunkFilename: '[name].[chunkhash:6].js',	//不是上面的入口文件引入的模块，比如按需加载时，加上hash前缀
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
	//打包时不处理的依赖包
	//externals: {
	//	'react': 'React',		//将script引入的react的中全局变量React变成webpack的模块react
	//	'react-dom': 'ReactDOM'
	//},
	plugins: [
		new htmlWebpackPlugin({
			title: 'My app',
			filename: path.resolve(__dirname, 'views', 'index.html'),	//这里需要传入绝对路径
			template: 'src/template.html'
		}),
		//单独生成css文件
		new miniCssExtractPlugin({
			filename: "[name].css"
		}),
	],
	mode: 'production'
};

module.exports = config;
