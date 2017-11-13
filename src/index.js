import React from 'react';

import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader';

import Routes from './Routes';


const render = Component => {
	ReactDOM.render(
		<AppContainer>
			<Component/>
		</AppContainer>,
		document.getElementById('root'),
	)
};

render(Routes);

// 热更新
if (module.hot) {
	module.hot.accept('./Routes', () => render(Routes));
	// 使用这句也可以把 router 警告去掉
	// Warning: [react-router] You cannot change <Router routes>; it will be ignored
	// module.hot.accept('./Routes');
}
