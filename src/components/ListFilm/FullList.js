import React from "react";

export default function FullList(props) {
	return (
		<div>
			<ul className="listFilms">
				<li className="films"> {props.title} </li>{" "}
			</ul>
		</div>
	);
}
