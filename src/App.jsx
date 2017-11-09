import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link
} from 'react-router-dom';

import asyncComponent from './AsyncComponent';

const Counter = asyncComponent(() => import(/* webpackChunkName:'counter' */ './Counter'));


const Home = () => (
	<div>
		<h2>Home</h2>
	</div>
);

export default class App extends React.Component {

	render() {
		return (
			<Router>
				<div>
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/counter">Counter</Link></li>
					</ul>
					<hr/>
					<Route exact path="/" component={Home}/>
					{/*当你只想匹配'/roster'时，你需要使用"exact"参数*/}
					<Route exact path="/counter" component={Counter}/>
				</div>
			</Router>
		);
	}

};