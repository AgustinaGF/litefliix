import { React, useState } from "react";
import { Modal } from "antd";
import Avatar from "../AddFilm/AddFilm";

let titleFilmKey = 0;

export default function ModalFilm(props) {
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
				<p className="titleAddFilm"> AGREGAR PELÍCULA </p>{" "}
				<div>
					<Avatar />
					{/* <form onSubmit={handleLocalStorage}>
						<input
							type="text"
							name="title"
							required
							className="title"
							placeholder="TITLE"
							id="titleFilm"
							onChange={handleChange}
						/>
						<button
							className="btnUpload"
							// onClick={handleLocalStorage}
							// onClick=
							type="submit"
						>
							SUBIR PELÍCULA{" "}
						</button>{" "}
					</form> */}
				</div>{" "}
			</Modal>{" "}
		</>
	);
}
