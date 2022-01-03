import React from "react";
import Plus from "../../assets/plus.png";
import Play from "../../assets/play.png";

export default function Button() {
	return (
		<div className="containerButton">
			<button className="playButton">
				<img src={Play} alt="play icon" className="playIcon" /> Reproducir
			</button>
			<button className="plusButton">
				<img src={Plus} alt="plus icon" className="plusIcon" />
				mi lista
			</button>
		</div>
	);
}
