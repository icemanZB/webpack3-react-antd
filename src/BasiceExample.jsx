import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
import Counter from './Counter.jsx';

const Home = () => (
	<div>
		<h2>Home</h2>
	</div>
);

export default class BasicExample extends React.Component {
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
					<Route path="/counter" component={Counter}/>
				</div>
			</Router>
		);
	}
}