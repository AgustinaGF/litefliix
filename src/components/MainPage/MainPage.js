import React from "react";
import Background from "../Background/Background";
import Header from "../Header/Header";
import Text from "../Text/Text";
import Button from "../Button/Button";
import MenuFilm from "../Dropdown/Dropdown";
import Video from "../Video/Video";
import Images from "../Video/Images";

// data Video
import { popularFilms } from "../../data/popularFilms";

let popular = popularFilms.results;
let popularFilmsMain = popular.slice(0, [4]);
console.log("films", popularFilmsMain);

export default function MainPage() {
	return (
		<div className="containerAll">
			<Background />
			<Header />
			{/* <div className="prueba"> */}
			<MenuFilm />
			<Images popularFilmsMain={popularFilmsMain} /> {/* </div> */}
			{/* <Video popularFilmsMain={popularFilmsMain} /> */}
			{/* <div className="prueba2"> */}
			<Text />
			<Button />
			{/* </div> */}
		</div>
	);
}
