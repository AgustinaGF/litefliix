import React from "react";
import ListFilm from "./ListFilm";

export default function FullList(props) {
	console.log(props, "h");
	return (
		<div>
			<ul>
				<li>
					{" "}
					{props.title}
					<img src={props.img} alt="img Film"></img>
				</li>
			</ul>
		</div>
	);
}
