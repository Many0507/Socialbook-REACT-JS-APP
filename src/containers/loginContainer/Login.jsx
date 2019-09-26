import React, { useState, useEffect, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { setLoginFocus, removeLoginFocus, setSignUpFocus, removeSignUpFocus } from '../../helpers/focusFormsStyles';
import LoginHeader from '../../components/loginComponents/loginHeader';
import LoginMain from '../../components/loginComponents/loginMain';
import LoginFooter from '../../components/loginComponents/loginFooter';
import SignUpForm from '../../components/signupComponents/signupForm';

const Login = ({ history }) => {
	// Login States
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ errorMessage, setErrorMessage ] = useState(null);
	const [ loginIsLoading, setLoginIsLoading ] = useState(false);

	// SignUp States
	const [ username, setUsername ] = useState('');
	const [ signUpEmail, setSignUpEmail ] = useState('');
	const [ signUpPassword, setsignUpPassword ] = useState('');
	const [ signUpCorrect, setSignUpCorrect ] = useState(false);
	const [ errorMessageSignUp, setErrorMessageSignUp ] = useState(null);
	const [ signUploading, setSignUpLoading ] = useState(false);

	// Login refs
	const inputEmail = useRef(null);
	const labelEmail = useRef(null);
	const inputPassword = useRef(null);
	const labelPassword = useRef(null);

	// SignUp refs
	const signUp = useRef(null);
	const inputUsername = useRef(null);
	const labelUsername = useRef(null);
	const inputSignUpEmail = useRef(null);
	const labelSignUpEmail = useRef(null);
	const inputSignUpPassword = useRef(null);
	const labelSignUpPassword = useRef(null);

	useEffect(
		() => {
			const isAuth = localStorage.getItem('isAuth');
			if (isAuth) return history.push('/');
		},
		[ history ]
	);

	// Login Functions
	const updateEmail = e => {
		setEmail(e.target.value);
	};

	const updatePassword = e => {
		setPassword(e.target.value);
	};

	const onFocus = e => {
		setLoginFocus(e, inputEmail, inputPassword, labelEmail, labelPassword);
	};

	const onBlur = e => {
		removeLoginFocus(e, inputEmail, inputPassword, labelEmail, labelPassword);
	};

	const onSubmit = async e => {
		e.preventDefault();
		setLoginIsLoading(true);
		setErrorMessage(null);

		try {
			const user = await axios.post('http://localhost:3001/api/users/login', {
				email,
				password
			});

			const Error = user.data.Error;
			if (Error) {
				setLoginIsLoading(false);
				return setErrorMessage(Error);
			}

			const authtoken = user.headers.authtoken;
			localStorage.setItem('authtoken', authtoken);
			localStorage.setItem('isAuth', true);

			setLoginIsLoading(false);
			history.push('/');
		} catch (error) {
			setLoginIsLoading(false);
			console.log(error);
			return history.push('/error_500');
		}
	};

	// SignUp Functions
	const signUpBtn = e => {
		signUp.current.style.top = '0vh';
	};

	const updateUsername = e => {
		setUsername(e.target.value);
	};

	const updateSignUpEmail = e => {
		setSignUpEmail(e.target.value);
	};

	const updateSignUpPassword = e => {
		setsignUpPassword(e.target.value);
	};

	const onSignUpFocus = e => {
		setSignUpFocus(
			e,
			inputUsername,
			inputSignUpEmail,
			inputSignUpPassword,
			labelUsername,
			labelSignUpEmail,
			labelSignUpPassword
		);
	};
	const onSignUpBlur = e => {
		removeSignUpFocus(
			e,
			inputUsername,
			inputSignUpEmail,
			inputSignUpPassword,
			labelUsername,
			labelSignUpEmail,
			labelSignUpPassword
		);
	};

	const close = e => {
		if (e.target.id === 'signUp' || e.target.id === 'close') {
			signUp.current.style.top = '-100vh';
		}
	};

	const onSubmitSignUp = async e => {
		e.preventDefault();
		setSignUpLoading(true);
		setErrorMessageSignUp(null);
		try {
			const user = await axios.post('http://localhost:3001/api/users/', {
				name: username,
				email: signUpEmail,
				password: signUpPassword
			});
			const Error = user.data.Error;
			if (Error) {
				setSignUpLoading(false);
				return setErrorMessageSignUp(Error);
			}
			signUp.current.style.top = '-100vh';
			setSignUpLoading(false);
			setSignUpCorrect(true);
			setTimeout(() => {
				setSignUpCorrect(false);
			}, 2000);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<SignUpForm
				signUp={signUp}
				username={username}
				updateUsername={updateUsername}
				inputUsername={inputUsername}
				labelUsername={labelUsername}
				signUpEmail={signUpEmail}
				updateSignUpEmail={updateSignUpEmail}
				inputSignUpEmail={inputSignUpEmail}
				labelSignUpEmail={labelSignUpEmail}
				signUpPassword={signUpPassword}
				updateSignUpPassword={updateSignUpPassword}
				inputSignUpPassword={inputSignUpPassword}
				labelSignUpPassword={labelSignUpPassword}
				onSubmitSignUp={onSubmitSignUp}
				onSignUpFocus={onSignUpFocus}
				onSignUpBlur={onSignUpBlur}
				signUploading={signUploading}
				errorMessageSignUp={errorMessageSignUp}
				close={close}
			/>
			<LoginHeader />
			<LoginMain
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
				error={errorMessage}
				signUpBtn={signUpBtn}
			/>
			<LoginFooter />
		</div>
	);
};

export default withRouter(Login);
