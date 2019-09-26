import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import SignUpForm from '../../components/signupComponents/signupForm';

const SignUp = ({ history }) => {
	const [ email, setEmail ] = useState('');
	const [ name, setName ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ isSignUp, setIsSignUp ] = useState(false);
	const [ errorMessage, setErrorMessage ] = useState(null);

	const updateName = e => {
		setName(e.target.value);
	};

	const updateEmail = e => {
		setEmail(e.target.value);
	};

	const updatePassword = e => {
		setPassword(e.target.value);
	};

	const onSubmit = async e => {
		e.preventDefault();
		setErrorMessage(null);
		try {
			const user = await axios.post('http://localhost:3001/api/users/', {
				name,
				email,
				password
			});
			const Error = user.data.Error;
			if (Error) return setErrorMessage(Error);
			setIsSignUp(true);
		} catch (error) {
			console.log(error);
		}
	};

	const backToLogin = () => {
		history.push('/login');
	};

	return (
		<div>
			<SignUpForm
				updateName={updateName}
				updateEmail={updateEmail}
				updatePassword={updatePassword}
				onSubmit={onSubmit}
				isSignUp={isSignUp}
				error={errorMessage}
				backToLogin={backToLogin}
			/>
		</div>
	);
};
export default withRouter(SignUp);
