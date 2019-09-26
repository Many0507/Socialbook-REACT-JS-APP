import axios from 'axios';

export const setUserData = id => dispatch => {
	const getUserData = async () => {
		const user = await axios.get(`http://localhost:3001/api/users/${id}`);
		dispatch({
			type: 'SET_USERDATA',
			payload: user.data.data
		});
	};
	getUserData();
};

export const deleteUserData = () => ({
	type: 'DELETE_USERDATA'
});
