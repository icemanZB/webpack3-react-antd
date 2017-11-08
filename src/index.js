import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import BasiceExample from './BasiceExample.jsx';


ReactDOM.render(
	<AppContainer>
		<BasiceExample/>
	</AppContainer>,
	document.getElementById('root')
);

if(module.hot){
	module.hot.accept();
}
