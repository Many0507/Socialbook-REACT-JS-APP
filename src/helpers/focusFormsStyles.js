export const setLoginFocus = (e, inputEmail, inputPassword, labelEmail, labelPassword) => {
	if (!e.target.value) {
		if (e.target.id === 'Email') {
			inputEmail.current.classList.add('login-form__input--focus');
			labelEmail.current.classList.add('login-form__label--focus');
		}
		if (e.target.id === 'Password') {
			inputPassword.current.classList.add('login-form__input--focus');
			labelPassword.current.classList.add('login-form__label--focus');
		}
	}
};

export const removeLoginFocus = (e, inputEmail, inputPassword, labelEmail, labelPassword) => {
	if (!e.target.value) {
		if (e.target.id === 'Email') {
			inputEmail.current.classList.remove('login-form__input--focus');
			labelEmail.current.classList.remove('login-form__label--focus');
		}
		if (e.target.id === 'Password') {
			inputPassword.current.classList.remove('login-form__input--focus');
			labelPassword.current.classList.remove('login-form__label--focus');
		}
	}
};

export const setSignUpFocus = (
	e,
	inputUsername,
	inputSignUpEmail,
	inputSignUpPassword,
	labelUsername,
	labelSignUpEmail,
	labelSignUpPassword
) => {
	if (!e.target.value) {
		if (e.target.id === 'Username') {
			inputUsername.current.classList.add('signup-form__input--focus');
			labelUsername.current.classList.add('signup-form__label--focus');
		}
		if (e.target.id === 'Email-S') {
			inputSignUpEmail.current.classList.add('signup-form__input--focus');
			labelSignUpEmail.current.classList.add('signup-form__label--focus');
		}
		if (e.target.id === 'Password-S') {
			inputSignUpPassword.current.classList.add('signup-form__input--focus');
			labelSignUpPassword.current.classList.add('signup-form__label--focus');
		}
	}
};

export const removeSignUpFocus = (
	e,
	inputUsername,
	inputSignUpEmail,
	inputSignUpPassword,
	labelUsername,
	labelSignUpEmail,
	labelSignUpPassword
) => {
	if (!e.target.value) {
		if (e.target.id === 'Username') {
			inputUsername.current.classList.remove('signup-form__input--focus');
			labelUsername.current.classList.remove('signup-form__label--focus');
		}
		if (e.target.id === 'Email-S') {
			inputSignUpEmail.current.classList.remove('signup-form__input--focus');
			labelSignUpEmail.current.classList.remove('signup-form__label--focus');
		}
		if (e.target.id === 'Password-S') {
			inputSignUpPassword.current.classList.remove('signup-form__input--focus');
			labelSignUpPassword.current.classList.remove('signup-form__label--focus');
		}
	}
};
