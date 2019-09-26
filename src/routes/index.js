import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../pages/loginPage';
import Signup from '../pages/signupPage';
import Home from '../pages/homePage';
import error_404 from '../pages/error_404';
import error_500 from '../pages/error_500';

const index = () => (
	<BrowserRouter>
		<Switch>
			<Route path={'/'} exact component={Home} />
			<Route path={'/login'} component={Login} />
			<Route path={'/signup'} component={Signup} />
			<Route path={'/error_500'} component={error_500} />
			<Route component={error_404} />
		</Switch>
	</BrowserRouter>
);

export default index;
