const initialState = {};

const userReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'SET_USERDATA':
			state = payload;
			break;
		case 'DELETE_USERDATA':
			state = {};
			break;
		default:
			return state;
	}
	return state;
};
export default userReducer;
