import React from "react";

import Video from "./Video";

export default function Images(popularFilms) {
	let infoFilms = popularFilms?.popularFilmsMain;
	let infoPopularsFilms = infoFilms?.slice(0, [4]);

	return (
		<div className="containerImages">
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
