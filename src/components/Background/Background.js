import React from "react";
import { feactureFilm } from "../../data/feactureMovie";

const urlImage = `https://image.tmdb.org/t/p/w500/${feactureFilm.results[0].backdrop_path}`;
export default function Background() {
	console.log(feactureFilm);
	return (
		<div className="backgroundBody">
			<div className="backgroundContainer">
				<img className="backgroundImage" src={urlImage} />
			</div>
		</div>
	);
}
