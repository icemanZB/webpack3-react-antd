var path = require('path');

module.exports = {
	entry : './src/index.js',
	output: {
		filename: 'bundle.js',
		path    : path.resolve(__dirname, '..', 'dist')
	},
	module: {
		rules: [{
			test   : /\.jsx?$/,
			include: path.resolve(__dirname, '..', 'src'),
			exclude: /node_modules/,
			use    : 'babel-loader',
		}]
	}
};