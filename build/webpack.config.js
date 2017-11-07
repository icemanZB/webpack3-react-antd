var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
	entry: ['react-hot-loader/patch','webpack-hot-middleware/client', './src/index.js'],
	output : {
		filename: 'bundle.js',
		path    : path.resolve(__dirname, '..', 'dist')
	},
	module : {
		rules: [{
			test   : /\.jsx?$/,
			include: path.resolve(__dirname, '..', 'src'),
			exclude: /node_modules/,
			use    : 'babel-loader',
		}]
	},
	plugins: [

		new webpack.HotModuleReplacementPlugin(),
		// 可以保证出错时页面不阻塞，且会在编译结束后报错。
		new webpack.NoEmitOnErrorsPlugin(),

		new htmlWebpackPlugin({
			filename: 'index.html',
			template: path.resolve(__dirname, '..', 'src') + '/index_build.html',
			inject  : true
		})
	]
};