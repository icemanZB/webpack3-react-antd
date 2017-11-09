var merge                       = require('webpack-merge'),
    htmlWebpackPlugin           = require('html-webpack-plugin'),
    friendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin'),
    webpack                     = require('webpack'),
    baseWebpackConfig           = require('./webpack.base.conf'),
    config                      = require('./config');

module.exports = merge(baseWebpackConfig, {
	// 入口配置热更新和自动刷新页面
	entry  : ['react-hot-loader/patch', 'webpack-hot-middleware/client', './src/index.js'],
	module : {
		rules: [
			{
				test: /\.css$/,
				// 简单使用: use:['style-loader','css-loader']
				use : [
					// 将所有的计算后的样式插入到页面的 style 标签
					'style-loader',
					{
						// 处理 require、import 进来的 css 文件和样式中的 url() 等
						loader : 'css-loader',
						// 使用 CSS Modules
						options: {
							modules      : true,
							// 当某个 css 文件使用 @import 'test.less' 的时候，也需要对 test.less 进行 postcss
							// 1表示指定几个数量的 loader 来处理 import 的资源
							importLoaders: 1 // 0 => no loaders (default); 1 => postcss-loader; 2 => postcss-loader, sass-loader
						}
					},
					{
						// 它的作用是一个 CSS 解析器框架
						loader : 'postcss-loader',
						options: {
							plugins: function () {
								// 自动添加浏览器前缀插件
								return [require('autoprefixer')()];
							}
						}
					}
				]
			}
		]
	},
	// 通过在浏览器调试工具(browser devtools)中添加元信息(meta info)增强调试
	// 牺牲了构建速度的 'source-map' 是最详细的。
	// cheap-module-eval-source-map 对于开发环境是速度的最快
	devtool: '#cheap-module-eval-source-map',
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': '"development"'
			}
		}),
		// 热更新
		new webpack.HotModuleReplacementPlugin(),
		// 可以保证出错时页面不阻塞，且会在编译结束后报错。
		new webpack.NoEmitOnErrorsPlugin(),
		// 自动生成 .html 文件
		new htmlWebpackPlugin({
			filename: 'index.html',
			template: config.commonPath.src + '/index_build.html',
			inject  : true
		}),
		new friendlyErrorsWebpackPlugin()
	]
});
