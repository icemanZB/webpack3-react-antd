import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import Counter from './Counter';

const routes = (
	<Route path="/" component={Counter}>
		<IndexRoute component={Counter}/>
	</Route>
);

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
		return (<Router history={browserHistory} key={module.hot && new Date()}>
			{routes}
		</Router>)
	}
};

/*
const Routes = (
	<Route path="/" component={Counter}>
		<IndexRoute component={Counter}/>
	</Route>
);
export default Routes;*/
