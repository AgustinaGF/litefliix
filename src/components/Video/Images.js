import React, { useState } from "react";

import Video from "./Video";

export default function Images(popularFilms) {
	const [infoPopularsFilms, setPopularsFilms] = useState([
		popularFilms.popularFilmsMain,
	]);

	return (
		<div className="containerImages">
			{" "}
			{infoPopularsFilms[0].map((element) => {
				return (
					<Video img={element.backdrop_path} title={element.original_title} />
				);
			})}
		</div>
	);
}
