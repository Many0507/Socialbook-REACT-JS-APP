import React from 'react';
import './loginForm.scss';

const loginForm = ({
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
	<form className="login-form" onSubmit={onSubmit}>
		<h2 className="form__title">Inicia sesion</h2>
		{loginIsLoading ? (
			<div className="form__loading">
				<div className="lds-ellipsis">
					<div />
					<div />
					<div />
					<div />
				</div>
			</div>
		) : (
			''
		)}
		{signUpCorrect ? <p className="form__signup-correct">¡Registro exitoso!</p> : ''}
		{error ? <p className="form__error-message">{error}</p> : ''}
		<div className="login-form__box">
			<label htmlFor="Email" ref={labelEmail} className="login-form__label" id="username-label">
				Email:
			</label>
			<input
				type="text"
				id="Email"
				ref={inputEmail}
				className="login-form__input"
				value={email}
				onChange={updateEmail}
				onFocus={onFocus}
				onBlur={onBlur}
			/>
		</div>
		<div className="login-form__box">
			<label htmlFor="Password" ref={labelPassword} className="login-form__label" id="password-label">
				Contraseña:
			</label>
			<input
				type="password"
				ref={inputPassword}
				id="Password"
				className="login-form__input"
				value={password}
				onChange={updatePassword}
				onFocus={onFocus}
				onBlur={onBlur}
			/>
		</div>
		<button type="submit" className="btn--login btn">
			Iniciar sesion
		</button>
		<p className="signup-text">¿No tienes una cuenta?</p>
		<button type="button" className="btn--signup btn" onClick={signUpBtn}>
			Registrate
		</button>
	</form>
);

export default loginForm;
