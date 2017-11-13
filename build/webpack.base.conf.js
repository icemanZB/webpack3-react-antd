let config = require('./config'),
    path   = require('path');

module.exports = {
	entry  : {
		'index': './src/index.js'
	},
	output : {
		// 文件输出到 '/' 目录中
		path         : config.build.assetsPublicPath,
		// 他就是一个占位符，在 html 中引用的 js 路径，就会被替换为绝对地址，并且以这个开头的路径
		publicPath   : config.dev.assetsPublicPath,
		// 此选项决定了每个输出 bundle 的名称。 [name] => 使用路口的名称
		filename     : '[name].js',
		// 此选项决定了非入口(non-entry/require.ensure/import) chunk 文件的名称，可指定生成的路径
		chunkFilename: '[name].chunk.js'
	},
	// 配置模块如何解析
	resolve: {
		// 自动解析确定的扩展，import 时可省略 '.js'、'.jsx'
		extensions: ['.js', '.jsx'],
		// 告诉 webpack 解析模块时应该搜索的目录，避免向上递归搜索的方式去寻找
		modules   : [path.resolve(__dirname, "src"), "node_modules"],
		// 创建 import 或 require 的别名，来确保模块引入变得更简单
		alias     : {
			'src': config.commonPath.src
		}
	},
	module : {
		// 如果你确定一个模块中，没有其它新的依赖，就可以配置这项
		// webpack 将不再扫描这个文件中的依赖，这对于比较大型类库，可加快编译速度
		// noParse: /node_modules\/(element-ui\.js)/,
		rules: [
			{
				test   : /\.jsx?$/,
				// cacheDirectory=true 使用 babel 缓存
				// loader : ['react-hot-loader/webpack','babel-loader?cacheDirectory=true'],
				loader : 'babel-loader?cacheDirectory=true',
				exclude: /node_modules/,
				include: path.join(__dirname, '..', 'src')
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use : ['file-loader']
			}
		]
	}
};