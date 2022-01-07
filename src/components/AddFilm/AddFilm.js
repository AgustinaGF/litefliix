import { React, useState } from "react";
import ProgressBarFailed from "../ProgressBarFailed/ProgressBarFailed";
import Form from "../Form/Form";
import DoneUpload from "../DoneUpload/DoneUpload";

import { Upload, message } from "antd";

import AddIcon from "../../assets/AddIcon.png";

export default function Prueba(changeTitle) {
	let arrayFilms = [];
	const [input, setInput] = useState("");
	const [failed, setFailed] = useState(false);
	const [done, setDone] = useState(false);
	const [uploading, setUploading] = useState(false);

	const [nameFilm, setNameFilm] = useState("");
	const props = {
		name: "file",
		action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
		headers: {
			authorization: "authorization-text",
		},
		onChange(info) {
			setUploading(true);
			if (info.file.status !== "uploading") {
				console.log(info.file, info.fileList);
			}
			if (info.file.status === "done") {
				message.success(`${info.file.name} file uploaded successfully`);
				console.log(info);
				changeTitle.setTitle("LITEFLIX");
				setDone(true);
			} else if (info.file.status === "error") {
				setFailed(true);
				message.error(`${info.file.name} file upload failed.`);
			}
		},
		progress: {
			strokeColor: {
				"0%": " #64EEBC",
				"100%": "#64EEBC",
			},
			strokeWidth: 3,
			format: (percent) => `${parseFloat(percent.toFixed(2))}%`,
		},
		// función de onChange del input
		handleChangeInput(event) {
			event.preventDefault();
			setInput(event.target.value);
		},
		// funcion que guarda todo en el localStorage
		handleOnclickAddFilm(event) {
			event.preventDefault();
			let newFilm = {
				titleFilm: input,
			};
			arrayFilms.push(newFilm);
			saveLocalStorage(arrayFilms);
			console.log(input);
			setNameFilm(input);
		},
	};
	// funcion que guarda en localStorage
	function saveLocalStorage(listFilms) {
		localStorage.setItem("newFilm", JSON.stringify(listFilms));
	}
	if (done && nameFilm) {
		return <DoneUpload nameFilm={nameFilm} />;
	}
	if (failed) {
		return <ProgressBarFailed />;
	} else {
		return (
			<div className="containerUpload">
				<Upload {...props}>
					<div className={uploading ? "notDotted" : "dotted"}>
						<div className="addTitle" style={{ marginTop: 8 }}>
							<img src={AddIcon} alt="add Icon" className="icon" /> AGREGÁ UN
							ARCHIVO O ARRASTRALO Y SOLTALO AQUÍ{" "}
						</div>
					</div>
				</Upload>
				<Form
					onChange={props.handleChangeInput}
					onClick={props.handleOnclickAddFilm}
				/>
			</div>
		);
	}
}
