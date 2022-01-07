import { React, useState } from "react";
import { Modal } from "antd";
import Prueba from "../AddFilm/AddFilm";

export default function ModalFilm(props) {
	const [title, setTitle] = useState("AGREGAR PELÍCULA ");

	// const [textInput, setTextInput] = useState("");
	// function handleChange(event) {
	// 	setTextInput(event.target.value);
	// }
	// function handleLocalStorage(event) {
	// 	console.log(textInput);
	// 	event.preventDefault();
	// 	// titleFilmKey + 1;
	// 	localStorage.setItem("titleFilm", textInput);

	// 	console.log(localStorage.getItem("titleFilm"), "qq");
	// }
	return (
		<>
			<Modal
				visible={props.showModal}
				onCancel={props.onClose}
				footer={null}
				className="modalFilm"
			>
				<p className="titleAddFilm"> {title} </p>{" "}
				<div>
					<Prueba title={title} setTitle={setTitle} />{" "}
				</div>{" "}
			</Modal>{" "}
		</>
	);
}
