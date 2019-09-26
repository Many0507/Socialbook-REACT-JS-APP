const getToken = () => {
	const token = localStorage.getItem('authtoken');
	if (!token) return false;
	return token;
};
export default getToken;
