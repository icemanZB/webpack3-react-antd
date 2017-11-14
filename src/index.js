import React from 'react';
import {render} from 'react-dom';
import {browserHistory} from 'react-router';

import Routes from './Routes';

render(
	<Routes history={browserHistory}/>,
	document.getElementById('root')
);

// const render = Component => {
// 	ReactDOM.render(
// 		<AppContainer>
// 			<Component/>
// 		</AppContainer>,
// 		document.getElementById('root'),
// 	)
// };
//
// render(Routes);

// 热更新
// if (module.hot) {
// module.hot.accept('./Routes', () => render(Routes));
// 使用这句也可以把 router 警告去掉
// Warning: [react-router] You cannot change <Router routes>; it will be ignored
// module.hot.accept('./Routes');
// }
