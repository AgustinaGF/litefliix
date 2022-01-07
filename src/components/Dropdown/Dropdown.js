import { React, useState } from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import ListFilm from "../ListFilm/ListFilm";
import viewIcon from "../../assets/View.png";

export default function MenuFilm() {
	// const [showList, setShowList] = useState(false);
	const [myFilms, setMyFilms] = useState("");
	const [showModal, setShowModal] = useState(false);

	async function handleOnclick(e) {
		e.preventDefault();
		setShowModal(true);
	}
	const handleCloseModal = () => {
		setShowModal(false);
	};

	function getFilmLocalStorage() {
		setShowModal(true);
		let films = localStorage.getItem("newFilm");
		if (films == null) {
			console.log("no hay peliculas");
			return <h1> No hay Peliculas cargadas </h1>;
		} else {
			setMyFilms(JSON.parse(films));
			console.log(JSON.parse(films));
			return JSON.parse(films);
		}
	}
	const menu = (
		<Menu className="containerDropdown">
			<Menu.Item className="popular" key="0">
				<a href="">
					<b> POPULARES </b>{" "}
				</a>{" "}
				<img src={viewIcon} alt="view icon" className="viewIcon"></img>{" "}
			</Menu.Item>{" "}
			<Menu.Item className="myFilms" key="1">
				<a onClick={getFilmLocalStorage}> mis películas </a>{" "}
			</Menu.Item>{" "}
		</Menu>
	);
	if (showModal) {
		return (
			<ListFilm
				props={myFilms}
				showModal={showModal}
				onClose={handleCloseModal}
			/>
		);
	} else {
		return (
			<div className="menuFilm">
				<Dropdown overlay={menu} trigger={["click"]}>
					<a className="dropdown" onClick={(e) => e.preventDefault()}>
						VER <b> POPULARES </b> <DownOutlined />
					</a>
				</Dropdown>
			</div>
		);
	}
}
