import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Home extends Component {
	render() {
		return <Link to="/counter">Counter</Link>
	}
}