import React, {Component} from 'react';
import {Link} from 'react-router';

import 'main.less';


export default class Home extends Component {
	render() {
		return <div className="font"><Link to="/counter">Counter</Link></div>
	}
}