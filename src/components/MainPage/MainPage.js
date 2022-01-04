import React, { useState } from "react";
import Background from "../Background/Background";
import Header from "../Header/Header";
import Text from "../Text/Text";
import Button from "../Button/Button";
import MenuFilm from "../Dropdown/Dropdown";
import Video from "../Video/Video";
import Images from "../Video/Images";
import ModalFilm from "../Modal/Modal";

// data Video
import { popularFilms } from "../../data/popularFilms";

let popular = popularFilms.results;
let popularFilmsMain = popular.slice(0, [4]);

export const MainPage = () => {
	const [showModal, setShowModal] = useState(false);

	async function handleOnclick(e) {
		e.preventDefault();
		setShowModal(true);
	}
	const handleCloseModal = () => {
		setShowModal(false);
	};
	return (
		<div className="containerAll">
			<Background />
			<>
				<Header onClick={handleOnclick} />
				<ModalFilm showModal={showModal} onClose={handleCloseModal} />
			</>
			<MenuFilm />
			<Images popularFilmsMain={popularFilmsMain} />
			<Text />
			<Button />
		</div>
	);
};
