// 引入 nodejs 中的 'path' 模块
// __dirname  是 node.js 中的一个全局变量，用来获取当前模块文件所在目录的完整绝对路径
var path = require('path'),
    // path.resolve([from ...], to); from: 源路径 to: 将被解析到绝对路径的字符串
    rootPath = path.resolve(__dirname,'../'),
    // path.join([path1],[path2]..[pathn]); 路径合并
    src = path.join(rootPath,'src');

module.exports = {
	build:{
		assetsRoot: path.resolve(__dirname, '../dist'),
		assetsSubDirectory: 'static',
		assetsPublicPath: '/',
		productionSourceMap: false
	},
	dev: {
		port: 8081,
		assetsSubDirectory: 'static',
		assetsPublicPath: '/',
		cssSourceMap: false
	},
	commonPath: {
		rootPath: rootPath,
		// path.posix 处理反斜杠的，兼容 windows 和 linux
		// path.posix.join => /static  path.join => \static
		staticPath: path.posix.join('/', 'static'),
		fallback: path.join(rootPath, 'node_modules'),
		src: src
	}
};