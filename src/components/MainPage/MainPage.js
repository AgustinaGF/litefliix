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
			<MenuFilm />
			{/* <Images popularFilmsMain={popularFilmsMain} />{" "} */}
			{/* <Video popularFilmsMain={popularFilmsMain} /> */} <Text />
			<Button />
		</div>
	);
}
