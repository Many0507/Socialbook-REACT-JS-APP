import axios from 'axios';
import getToken from '../helpers/getToken';

const auth = async () => {
	const token = getToken();
	if (token) {
		axios.defaults.headers.common['authtoken'] = token;
		const userAuth = await axios.get('http://localhost:3001/api/auth');
		if (userAuth.data.private) {
			delete axios.defaults.headers.common['authToken'];
			localStorage.removeItem('authtoken');
			return false;
		}
		return true;
	}
	return false;
};

export default auth;
