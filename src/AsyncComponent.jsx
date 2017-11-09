import React from 'react'

// 异步按需加载组件
const asyncComponent = loadComponent => (
	class AsyncComponent extends React.Component {

		constructor(props) {
			super(props);
			this.state = {
				Component: null,
			};
		}

		componentWillMount() {
			if (this.hasLoadedComponent()) {
				return;
			}

			loadComponent()
				.then(module => module.default)
				.then((Component) => {
					this.setState({Component});
				})
				.catch((err) => {
					console.error(`Cannot load component in <AsyncComponent />`);
					throw err;
				});
		}

		hasLoadedComponent() {
			return this.state.Component !== null;
		}

		render() {
			const {Component} = this.state;
			return (Component) ? <Component {...this.props} /> : null;
		}
	}
);

export default asyncComponent;