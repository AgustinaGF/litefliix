import React from "react";
import { feactureFilm } from "../../data/feactureMovie";

let filmTitle = feactureFilm.results[0].original_title;
let shortTitle = filmTitle.split(":");
let resultShortTitle = shortTitle[0];

export default function Text() {
	return (
		<div className="containerText">
			<h2 className="titleLiteflix">
				ORIGINAL DE <b>LITEFLIX</b>
			</h2>
			<h1 className="filmTitle">{resultShortTitle}</h1>
		</div>
	);
}
