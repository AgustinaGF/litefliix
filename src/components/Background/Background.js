import React from "react";
import { Carousel } from "antd";
import Text from "../Text/Text";

export default function Background({ featuredMovie }) {
	console.log(featuredMovie, "que movie");
	// const infoMovies = results;
	const mainFilms = featuredMovie?.slice(0, [4]);

	return (
		<div className="backgroundBody">
			<Carousel className="backgroundContainer" autoplay>
				{mainFilms.map((element) => {
					console.log(element, "que cara");
					let urlImage = `https://image.tmdb.org/t/p/w500/${element.backdrop_path}`;
					let title = element.original_title;
					return (
						<div>
							<img src={urlImage} className="backgroundImage" />
							<Text props={title} />
						</div>
					);
				})}
			</Carousel>
		</div>
	);
}
