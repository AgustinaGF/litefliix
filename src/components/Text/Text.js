import React from "react";
import Button from "../Button/Button";
// import { feactureFilm } from "../../data/feactureMovie";

// let filmTitle = feactureFilm.results[0].original_title;
// let shortTitle = filmTitle.split(":");
// let resultShortTitle = shortTitle[0];

export default function Text(props) {
	console.log(props);
	let filmTitle = props.props;
	let shortTitle = filmTitle.split(":");
	console.log(shortTitle);
	let resultShortTitle = shortTitle[0];
	return (
		<div className="containerText">
			<div className="containerLiteflix">
				<h2 className="titleLiteflix">
					ORIGINAL DE <b> LITEFLIX </b>{" "}
				</h2>
			</div>
			<div className="containerFilmTitle">
				<h1 className="filmTitle"> {resultShortTitle} </h1>
			</div>
			<Button />
		</div>
	);
}
