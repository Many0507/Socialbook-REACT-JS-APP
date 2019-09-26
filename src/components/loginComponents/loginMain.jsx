import React from 'react';
import LoginForm from './loginForm';
import './loginMain.scss';

const loginMain = ({
	email,
	updateEmail,
	inputEmail,
	labelEmail,
	password,
	updatePassword,
	inputPassword,
	labelPassword,
	onSubmit,
	onFocus,
	onBlur,
	loginIsLoading,
	signUpCorrect,
	error,
	signUpBtn
}) => (
	<main>
		<div className="main-content">
			<div className="background-image" />
			<section className="form">
				<LoginForm
					email={email}
					updateEmail={updateEmail}
					inputEmail={inputEmail}
					labelEmail={labelEmail}
					password={password}
					updatePassword={updatePassword}
					inputPassword={inputPassword}
					labelPassword={labelPassword}
					onSubmit={onSubmit}
					onFocus={onFocus}
					onBlur={onBlur}
					loginIsLoading={loginIsLoading}
					signUpCorrect={signUpCorrect}
					error={error}
					signUpBtn={signUpBtn}
				/>
			</section>
			<section className="picture">
				<h3 className="picture__title">Comparte, Chatea, Expresate.</h3>
			</section>
		</div>
	</main>
);

export default loginMain;
