import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFeaturedMovie } from "./actions/featured-movie";
import { getPopularMovies } from "./actions/popular-movies";
import { MainPage } from "./components/MainPage/MainPage";
import "./components/styles/App.scss";

export const App = () => {
	// useEffect(() => {
	// 	dispatch(getPopularMovies());
	// }, [dispatch]);

	// console.log("movies", featuredMovie);
	// console.log("popular", popularMovies);

	return (
		<div className="App">
			<MainPage />
		</div>
	);
};

export default App;
