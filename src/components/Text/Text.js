import React from "react";
import Button from "../Button/Button";

export default function Text(props) {
	let filmTitle = props.props;
	let shortTitle = filmTitle.split(":");

	let resultShortTitle = shortTitle[0];
	return (
		<div className="containerText">
			<div className="containerLiteflix">
				<h2 className="titleLiteflix">
					ORIGINAL DE <b> LITEFLIX </b>
				</h2>{" "}
			</div>{" "}
			<div className="containerFilmTitle">
				<h1 className="filmTitle"> {resultShortTitle} </h1>{" "}
			</div>{" "}
			<Button />
		</div>
	);
}
