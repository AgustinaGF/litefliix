import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getFeaturedMovie } from "../../actions/featured-movie";
import { getPopularMovies } from "../../actions/popular-movies";

import Background from "../Background/Background";
import Header from "../Header/Header";
import ButtonMobile from "../ButtonMobile/ButtonMobile";
import MenuFilm from "../Dropdown/Dropdown";
import Images from "../Video/Images";
import ModalFilm from "../Modal/Modal";
import Loader from "../Loader/Loader";

export const MainPage = () => {
	const dispatch = useDispatch();
	const featuredMovie = useSelector((state) => state.featuredMovie);
	const popularMovies = useSelector((state) => state.popularMovies);

	const [isLoading, setIsLoading] = useState(true);

	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		handleConnect();
	}, [dispatch]);

	const handleConnect = async () => {
		await dispatch(getFeaturedMovie());
		await dispatch(getPopularMovies());
		setIsLoading(false);
	};

	async function handleOnclick(e) {
		e.preventDefault();
		setShowModal(true);
	}
	const handleCloseModal = () => {
		setShowModal(false);
	};
	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<div className="containerAll">
					<Background featuredMovie={featuredMovie?.data?.results} />
					<>
						<Header onClick={handleOnclick} />
						<ModalFilm showModal={showModal} onClose={handleCloseModal} />
					</>
					<MenuFilm />
					<ButtonMobile />
					<Images popularFilmsMain={popularMovies?.data.results} />
				</div>
			)}
		</>
	);
};
