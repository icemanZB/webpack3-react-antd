import React from 'react';

import 'main.less';

const COUNT_STEP = 10;

export default class Counter extends React.Component {

	constructor(props) {
		super(props);
		this.state = {value: 1};
	}

	componentDidMount() {
		this.timeout = setTimeout(this.handleTimeoutEvent.bind(this), 1000);
	}

	componentWillUnmount() {
		this.timeout && clearTimeout(this.timeout);
	}

	handleTimeoutEvent() {
		this.setState({value: this.state.value + COUNT_STEP}, () => {
			this.timeout = setTimeout(this.handleTimeoutEvent.bind(this), 1000);
		});
	}

	render() {
		return (
			<div className="font">
				<p> This is a counter: {this.state.value} </p>
			</div>
		);
	}
}