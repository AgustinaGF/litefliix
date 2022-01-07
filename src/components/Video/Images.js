import React, { useState } from "react";

import Video from "./Video";

export default function Images(popularFilms) {
	console.log(popularFilms);
	let infoFilms = popularFilms?.popularFilmsMain;
	let infoPopularsFilms = infoFilms?.slice(0, [4]);
	console.log(infoPopularsFilms);
	// const [infoPopularsFilms, setPopularsFilms] = useState([
	// 	popularFilms.popularFilmsMain,
	// ]);

	return (
		<div className="containerImages">
			{" "}
			{infoPopularsFilms.map((element) => {
				return (
					<Video
						img={element.backdrop_path}
						title={element.original_title}
						key={element.id}
					/>
				);
			})}
		</div>
	);
}
