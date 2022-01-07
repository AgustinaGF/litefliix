import { React, useState } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import ProgressBarFailed from "../ProgressBarFailed/ProgressBarFailed";
import Form from "../Form/Form";
import DoneUpload from "../DoneUpload/DoneUpload";

import { Upload, message, Progress, Button } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

import { UploadOutlined } from "@ant-design/icons";
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
		// className: "avatar-uploader",

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
				// setNameFilm(info.file.name);
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
			// console.log(this.state.img);
			setNameFilm(input);
			// aca podria agregar otro estado y que cuando tengo los dos estados se levante la pantalla final
			// this.setState({ loading: false });
		},
	};
	// funcion que guarda en localStorage
	function saveLocalStorage(listFilms) {
		localStorage.setItem("newFilm", JSON.stringify(listFilms));
	}
	if (done && nameFilm) {
		console.log(done, nameFilm);
		return <DoneUpload nameFilm={nameFilm} />;
	}
	if (failed) {
		console.log(failed);
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

// return(

// );

// let cantLoad = false;
// let arrayFilms = [];
// const header = {};

// function getBase64(img, callback) {
// 	const reader = new FileReader();
// 	reader.addEventListener("load", () => callback(reader.result));
// 	reader.readAsDataURL(img);
// }

// function beforeUpload(file) {
// 	console.log(file, "que hay");
// 	const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
// 	if (!isJpgOrPng) {
// 		message.error("You can only upload JPG/PNG file!");
// 		cantLoad = true;
// 	}
// 	const isLt2M = file.size / 1024 / 1024 < 2;
// 	if (!isLt2M) {
// 		message.error("Image must smaller than 2MB!");
// 		cantLoad = true;
// 	}
// 	return isJpgOrPng && isLt2M;
// }

// export default class Avatar extends React.Component {
// 	state = {
// 		loading: false,
// 		fail: false,
// 		inputText: "",
// 		imgFilm: "",
// 		info: "",
// 	};
// 	// función de onChange del input
// 	handleChangeInput = (event) => {
// 		event.preventDefault();
// 		this.setState({ inputText: event.target.value });
// 		console.log(this.state.inputText);
// 	};
// 	// funcion que guarda todo en el localStorage
// 	handleOnclickAddFilm = (event) => {
// 		event.preventDefault();
// 		let newFilm = {
// 			titleFilm: this.state.inputText,
// 			imgFilm: this.state.img,
// 		};
// 		arrayFilms.push(newFilm);
// 		this.saveLocalStorage(arrayFilms);
// 		console.log(this.state.inputText);
// 		console.log(this.state.img);
// 		// aca podria agregar otro estado y que cuando tengo los dos estados se levante la pantalla final
// 		// this.setState({ loading: false });
// 	};

// 	// funcion que guarda en localStorage
// 	saveLocalStorage = (listFilms) => {
// 		localStorage.setItem("newFilm", JSON.stringify(listFilms));
// 	};

// 	handleChange = (info) => {
// 		console.log(info, "hola");
// 		if (info.file.status === "uploading") {
// 			this.setState({ loading: true, info: info });
// 			return;
// 		}
// 		if (info.file.status === "done") {
// 			console.log(info, "chau");
// 			// Get this url from response in real world.
// 			getBase64(info.file.originFileObj, (imageUrl) =>
// 				this.setState({
// 					loading: false,
// 					imageUrl,
// 				})
// 			);
// 		}
// 		if (cantLoad) {
// 			console.log(info.file);
// 			this.setState({
// 				fail: true,
// 			});
// 			return;
// 		}
// 	};

// 	render() {
// 		const { loading, imageUrl, fail, fullUpload, info } = this.state;
// 		console.log(imageUrl);
// 		const uploadButton = (
// 			<div className="iconAndText">
// 				{loading ? (
// 					<ProgressBar />
// 				) : (
// 					// <ProgressBar props={} />
// 					// <LoadingOutlined />
// 					<img src={AddIcon} alt="add Icon" className="icon"></img>
// 				)}
// 				<div className="addTitle" style={{ marginTop: 8 }}>
// 					AGREGÁ UN ARCHIVO O ARRASTRALO Y SOLTALO AQUÍ{" "}
// 				</div>{" "}
// 			</div>
// 		);
// 		// if (loading) {
// 		// 	return (
// 		// 		<div>
// 		// 			<ProgressBar props={info} />
// 		// 			<Form
// 		// 				onChange={this.handleChangeInput}
// 		// 				onClick={this.handleOnclickAddFilm}
// 		// 			/>
// 		// 		</div>
// 		// 	);
// 		// }
// 		// if (fail) {
// 		// 	console.log(fail);
// 		// 	return <ProgressBarFailed />;
// 		// } else {
// 			return (
// 				<div>
// 					<Upload
// 						name="avatar"
// 						listType="picture-card"
// 						className="avatar-uploader"
// 						showUploadList={false}
// 						action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
// 						headers={{ "Access-Control-Allow-Origin": "*" }}
// 						beforeUpload={beforeUpload}
// 						onChange={this.handleChange}
// 						progress
// 					>
// 						{imageUrl ? (
// 							<img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
// 						) : (
// 							uploadButton
// 						)}
// 					</Upload>
// 					<Form
// 						onChange={this.handleChangeInput}
// 						onClick={this.handleOnclickAddFilm}
// 					/>{" "}
// 				</div>
// 			);
// 		}
// 	}
// }
