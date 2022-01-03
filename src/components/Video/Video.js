import React from "react";
import PlayFilm from "../../assets/playFilm.png";

export default function Video(props) {
	console.log(props);
	let url = `https://image.tmdb.org/t/p/w500/${props.img}`;
	return (
		<div className="containerPopularFilm">
			<img src={url} alt="populars Films" className="imgPopularFilm"></img>
			<img src={PlayFilm} alt="icon play film" className="iconPopularFilm" />
		</div>
	);
}
