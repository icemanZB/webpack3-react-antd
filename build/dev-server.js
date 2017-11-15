var path = require('path');
var express = require('express'), app = express();
var config           = require('./config'),
    webpack          = require('webpack'),
    webpackDevConfig = require('./webpack.dev.config'),
    webpackCompiled  = webpack(webpackDevConfig),
    port             = config.dev.port;

// 配置运行时打包
var devMiddleware = require('webpack-dev-middleware')(webpackCompiled, {
	publicPath: webpackDevConfig.output.publicPath,
	// console 统计日志带颜色输出
	stats     : {color: true},
	// lazy        : false,
	// lazy：指示是否懒人加载模式。true表示不监控源码修改状态，收到请求才执行webpack的build。false表示监控源码状态，配套使用的watchOptions可以设置与之相关的参数。
	// watchOptions: {
	// 	aggregateTimeout: 300,
	// 	poll            : true
	//}
});

var hotMiddleware = require('webpack-hot-middleware')(webpackCompiled, {
	log      : false,
	//heartbeat: 2000
});


app.use(hotMiddleware);
// 刷新页面可以让路由找到
app.use('/', require('connect-history-api-fallback')());
// webpack 服务输出
app.use(devMiddleware);
// 服务端复制静态资源
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory);
app.use(staticPath, express.static('./static'));

// node 服务
var _resolve;
var _reject;
var readyPromise = new Promise((resolve, reject) => {
	_resolve = resolve;
	_reject = reject;
});

var server;
var portfinder = require('portfinder');
portfinder.basePort = port;

console.log('> Starting dev server...');
devMiddleware.waitUntilValid(() => {
	portfinder.getPort((err, port) => {
		if (err) {
			_reject(err);
		}
		var uri = 'http://localhost:' + port;
		console.log('> Listening at ' + uri + '\n');
		server = app.listen(port);
		_resolve();
	})
});

module.exports = {
	ready: readyPromise,
	close: () => {
		server.close()
	}
};

