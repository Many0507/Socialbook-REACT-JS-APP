import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { decode } from 'jsonwebtoken';
import { setUserData, deleteUserData } from '../../actions/userActions';
// import axios from 'axios';
import auth from '../../auth/auth';
import getToken from '../../helpers/getToken';

const Home = ({ history, user, setUserData, deleteUserData }) => {
	useEffect(
		() => {
			const checkIsAuth = async () => {
				const isAuth = await auth();
				if (!isAuth) return history.push('/login');
				const token = getToken();
				const decodedToken = decode(token, { complete: true });
				const userId = decodedToken.payload.id;
				setUserData(userId);
			};
			checkIsAuth();
		},
		[ history, setUserData ]
	);

	const logout = () => {
		localStorage.removeItem('authtoken');
		localStorage.removeItem('isAuth');
		deleteUserData();
		history.push('/login');
	};

	return (
		<div>
			<h1>Hola {user.name} !</h1>
			<button onClick={logout}>Logout</button>
		</div>
	);
};

const mapStateToProps = state => ({
	user: state.user
});

const mapDispatchToProps = dispatch => ({
	setUserData: id => {
		dispatch(setUserData(id));
	},
	deleteUserData: () => {
		dispatch(deleteUserData());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
