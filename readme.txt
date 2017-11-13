react 安装的版本是 15.0的最后一个版本 15.6.1

webpack import() 代码分离   https://doc.webpack-china.org/guides/code-splitting

webpack3 的例子 https://github.com/hyy1115/react-redux-webpack3.git

webstorm 默认是 cmd.exe 改成 PowerShell  路径  C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe

https://segmentfault.com/a/1190000009820646    https://segmentfault.com/a/1190000009820646

webpack 懒加载 https://doc.webpack-china.org/guides/lazy-loading

es7 async、await http://www.ruanyifeng.com/blog/2015/05/async.html   http://cnodejs.org/topic/5640b80d3a6aa72c5e0030b6

类的修饰器 @test()class A(){} http://es6.ruanyifeng.com/#docs/decorator#%E7%B1%BB%E7%9A%84%E4%BF%AE%E9%A5%B0

webpack3 新特性 http://www.cnblogs.com/libin-1/p/7067820.html

webpack3 https://www.villainhr.com/page/2017/10/27/%E7%9C%8B%E5%95%A5%E5%8F%8C%E6%8B%B1%E9%97%A8%EF%BC%8C%E6%9D%A5%E5%AD%A6%20webpack%203%E5%95%8A

babel-preset-env http://2ality.com/2017/02/babel-preset-env.html    https://zhuanlan.zhihu.com/p/29506685   https://segmentfault.com/a/1190000011639765

react 热更新 http://www.cnblogs.com/developerdaily/p/6806217.html  http://www.jianshu.com/p/b7accbae3a1c http://www.jianshu.com/p/533d575af6c4 http://gaearon.github.io/react-hot-loader/getstarted/

react-router4入门 https://segmentfault.com/a/1190000010174260
http://www.jianshu.com/p/e3adc9b5f75c
https://reacttraining.com/react-router/web/guides/code-splitting
http://www.jianshu.com/p/d712a5030c13
http://blog.csdn.net/sinat_17775997/article/details/77411324
http://blog.csdn.net/sinat_17775997/article/details/69218382


mac 显示隐藏文件 defaults write com.apple.finder AppleShowAllFiles TRUE; killall Finder

https://github.com/ShiChenCong 项目源码


antd 兼容问题
react react-dom 这种公共代码打包的问题
代码分割问题
react-hot-loader 官方例子？
React.createElement: type is invalid :出现这个问题，我也搞了很久，最后把  import { Foot } from './foot.js'  改成了 import Foot from './foot.js' 就解决了
使用export default时，对应的import语句不需要使用大括号，不使用export default时，对应的import语句需要使用大括号。

browser.js?1af0:49 Warning: [react-router] You cannot change <Router routes>; it will be ignored
https://stackoverflow.com/questions/34760825/react-route-react-hot-loader-webpack-you-cannot-change-router-routes-it-will

react-router版本现今已经到4.0.0了，而上一个稳定版本还是2.8.1



webpack 是模块打包器。先分析项目依赖，再打包在一起。
webpack 是通过nodejs来跑的，所以尽量不使用 es6 语法，需要使用 nodejs 语法。

npm install cnpm -g --registry=https://registry.npm.taobao.org  安装配置淘宝镜像

webpack 中 exclude 值可以是个数组，排除多个条件，下面的规则先执行，也就是从后往前执行
publicPath : 所有资源的基础路径，一定是 '/' 结尾
devServer 中的 publicPath： 服务器打包资源后输出路径


Source Maps

如果你使用 devtool: 'source-map, source map的产生会隐藏hot reloading code

Source maps会降低你工程的编译速度。使用devtool: 'eval'会获得最好的体验

Hot reloading code只会再每个module里面最开始和最后后面占用一行，所以你可能完全不需要source map
