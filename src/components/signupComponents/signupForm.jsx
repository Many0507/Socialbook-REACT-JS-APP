import React from 'react';
import '../loginComponents/loginForm.scss';
import './signupForm.scss';

const signupForm = ({
	signUp,
	username,
	updateUsername,
	inputUsername,
	labelUsername,
	signUpEmail,
	updateSignUpEmail,
	inputSignUpEmail,
	labelSignUpEmail,
	signUpPassword,
	updateSignUpPassword,
	inputSignUpPassword,
	labelSignUpPassword,
	onSignUpFocus,
	onSignUpBlur,
	onSubmitSignUp,
	signUploading,
	errorMessageSignUp,
	close
}) => (
	<section className="signup" id="signUp" ref={signUp} onClick={close}>
		<form className="signup-form" id="signin-form" onSubmit={onSubmitSignUp}>
			<h2 className="form__title">Registrate</h2>
			{signUploading ? (
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
			{errorMessageSignUp ? <p className="form__error-message">{errorMessageSignUp}</p> : ''}
			<div className="signup-form__box">
				<label htmlFor="Username" className="signup-form__label" id="username-label" ref={labelUsername}>
					Username:
				</label>
				<input
					type="text"
					id="Username"
					ref={inputUsername}
					className="signup-form__input"
					value={username}
					onChange={updateUsername}
					onFocus={onSignUpFocus}
					onBlur={onSignUpBlur}
				/>
			</div>
			<div className="signup-form__box">
				<label htmlFor="Email-S" ref={labelSignUpEmail} className="signup-form__label" id="email-label">
					Email:
				</label>
				<input
					type="text"
					id="Email-S"
					ref={inputSignUpEmail}
					className="signup-form__input"
					value={signUpEmail}
					onChange={updateSignUpEmail}
					onFocus={onSignUpFocus}
					onBlur={onSignUpBlur}
				/>
			</div>
			<div className="signup-form__box">
				<label
					htmlFor="Password-S"
					ref={labelSignUpPassword}
					className="signup-form__label"
					id="password-label"
				>
					Contraseña:
				</label>
				<input
					type="password"
					id="Password-S"
					ref={inputSignUpPassword}
					className="signup-form__input"
					value={signUpPassword}
					onChange={updateSignUpPassword}
					onFocus={onSignUpFocus}
					onBlur={onSignUpBlur}
				/>
			</div>
			<button type="submit" className="btn--signup btn">
				Registrarse
			</button>
			<button type="button" id="close" className="btn--close btn" onClick={close}>
				Cerrar
			</button>
		</form>
	</section>
);

export default signupForm;
