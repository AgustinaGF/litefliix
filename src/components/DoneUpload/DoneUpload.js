import React from "react";

export default function DoneUpload(props) {
	return (
		<div className="containerSuccess">
			<h1 className="congratulations"> ¡FELICITACIONES! </h1>
			<div className="textAling">
				<h2 className="textTitle"> {props.nameFilm} </h2>
				<h2 className="success"> FUE CORRECTAMENTE SUBIDA </h2>
			</div>
			<button className="goHome"> IR A HOME </button>
		</div>
	);
}
