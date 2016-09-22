import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import App from './modules/App';
import Login from './modules/Login';
import Register from './modules/Register';

ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<Route path="/login" component={Login} />
			<Route path="/register" component={Register} />
		</Route>
	</Router>
), document.getElementById('app'))