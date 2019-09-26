import React from 'react';
import './loginHeader.scss';

const loginHeader = () => (
	<header className="login-header">
		<div className="container">
			<h1 className="login-header__title">
				Bienvenido a <span className="app-name">Socialbook.</span>
			</h1>
		</div>
	</header>
);

export default loginHeader;
