import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import PropTypes from 'prop-types';

import asyncComponent from './AsyncComponent';

// import Counter from './Counter';
const Counter = asyncComponent(()=>import(/* webpackChunkName:"Counter" */ "./Counter"));
import Home from './Home';

/*

export default class Root extends React.Component {

	componentDidMount() {
		console.log(111);
	}

	shouldComponentUpdate() {
		return false;
	}

	render() {
		// return <Router history={browserHistory} routes={routes}/>
		// key={module.hot && new Date()} 可处理 react-router 爆出的警告
		return (<Router history={browserHistory}>
			{routes}
		</Router>)
	}
};

*/

// 函数式声明无状态组件(纯函数)
const Routes = ({history}) =>
	(
		<Router history={history}>
			<Route path="/" component={Home}/>
			<Route path="/counter" component={Counter}/>
		</Router>

	);


Routes.propTypes = {
	hsitory: PropTypes.any
};

export default Routes;
