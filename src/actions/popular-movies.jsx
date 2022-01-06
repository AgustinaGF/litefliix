import api from "../lib/api";

export const getPopularMovies = () => {
	return (dispatch) => {
		dispatch({ type: `GET_POPULAR_MOVIES_REQUEST` });
		return api
			.get("popular?api_key=6f26fd536dd6192ec8a57e94141f8b20")
			.then((response) => {
				dispatch({
					type: `GET_POPULAR_MOVIES_SUCCESS`,
					payload: response.data,
				});
			})
			.catch((error) => {
				dispatch({
					type: `GET_POPULAR_MOVIES_FAILURE`,
					payload: error.response.data,
				});
			});
	};
};
