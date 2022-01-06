const initialState = {
	loading: false,
	data: {},
	error: null,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "GET_POPULAR_MOVIES_REQUEST":
			return { ...state, loading: true };
		case "GET_POPULAR_MOVIES_SUCCESS":
			return {
				error: null,
				loading: false,
				data: action.payload,
			};
		case "GET_POPULAR_MOVIES_FAILURE":
			return {
				data: state.data,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
export default reducer;
