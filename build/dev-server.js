var express = require('express');
var app = express();
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var webpackCompiled = webpack(webpackConfig);
var webpackDevMiddleware = require('webpack-dev-middleware');

// 刷新页面可以让路由找到
app.use('/', require('connect-history-api-fallback')());
app.use('/', express.static('./static'));

// 配置运行时打包
app.use(webpackDevMiddleware(webpackCompiled, {
	publicPath  : '/',
	// console 统计日志带颜色输出
	stats       : {color: true},
	lazy        : false,
	// lazy：指示是否懒人加载模式。true表示不监控源码修改状态，收到请求才执行webpack的build。false表示监控源码状态，配套使用的watchOptions可以设置与之相关的参数。
	watchOptions: {
		aggregateTimeout: 300,
		poll            : true
	}

}));

// 配置热更新
var webpackHotMiddleware = require('webpack-hot-middleware');
app.use(webpackHotMiddleware(webpackCompiled));

var server = app.listen(3001, function () {
	var port = server.address().port;
	console.log('Open http://localhost:%s', port);
});