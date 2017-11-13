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
	// module.hot.accept('./Routes', () => render(Routes));
	module.hot.accept('./Routes');
}
