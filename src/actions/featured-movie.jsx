import api from "../lib/api";

export const getFeaturedMovie = () => {
	return (dispatch) => {
		dispatch({ type: `GET_FEATURED_MOVIE_REQUEST` });
		return api
			.get("now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20")
			.then((response) => {
				dispatch({
					type: `GET_FEATURED_MOVIE_SUCCESS`,
					payload: response.data,
				});
			})
			.catch((error) => {
				dispatch({
					type: `GET_FEATURED_MOVIE_FAILURE`,
					payload: error.response.data,
				});
			});
	};
};
