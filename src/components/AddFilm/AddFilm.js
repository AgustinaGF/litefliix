import React from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import ProgressBarFailed from "../ProgressBarFailed/ProgressBarFailed";
import Form from "../Form/Form";

import { Upload, message, Progress } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import AddIcon from "../../assets/AddIcon.png";

// const [cantLoad, setCantLoad] = useState(false);
let cantLoad = false;
let arrayFilms = [];

function getBase64(img, callback) {
	console.log(img, "que");
	const reader = new FileReader();
	reader.addEventListener("load", () => callback(reader.result));
	reader.readAsDataURL(img);
}

function beforeUpload(file) {
	console.log(file, "que hay");
	const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
	if (!isJpgOrPng) {
		message.error("You can only upload JPG/PNG file!");
		cantLoad = true;
		console.log(cantLoad);
	}
	const isLt2M = file.size / 1024 / 1024 < 2;
	if (!isLt2M) {
		message.error("Image must smaller than 2MB!");
		cantLoad = true;
	}
	return isJpgOrPng && isLt2M;
}

export default class Avatar extends React.Component {
	state = {
		loading: false,
		fail: false,
		inputText: "",
		imgFilm: "",
	};
	// función de onChange del input
	handleChangeInput = (event) => {
		event.preventDefault();
		this.setState({ inputText: event.target.value });
		console.log(this.state.inputText);
	};
	// funcion que guarda todo en el localStorage
	handleOnclickAddFilm = (event) => {
		event.preventDefault();
		let newFilm = {
			titleFilm: this.state.inputText,
			imgFilm: this.state.img,
		};
		arrayFilms.push(newFilm);
		this.saveLocalStorage(arrayFilms);
		console.log(this.state.inputText);
		console.log(this.state.img);
		// aca podria agregar otro estado y que cuando tengo los dos estados se levante la pantalla final
		this.setState({ loading: false });
	};

	// funcion que guarda en localStorage
	saveLocalStorage = (listFilms) => {
		localStorage.setItem("newFilm", JSON.stringify(listFilms));
	};

	handleChange = (info) => {
		console.log(info, "hola");
		if (info.file.status === "uploading") {
			this.setState({ loading: true, img: info.file.name });
			return;
		}
		if (info.file.status === "done") {
			// Get this url from response in real world.
			getBase64(info.file.originFileObj, (imageUrl) =>
				this.setState({
					loading: false,
					imageUrl,
				})
			);
		}
		if (cantLoad) {
			console.log(info.file);
			this.setState({
				fail: true,
			});
			return;
		}
	};

	render() {
		const { loading, imageUrl, fail, fullUpload } = this.state;
		console.log(imageUrl);
		const uploadButton = (
			<div className="iconAndText">
				{loading ? (
					<LoadingOutlined />
				) : (
					<img src={AddIcon} alt="add Icon" className="icon"></img>
				)}
				<div className="addTitle" style={{ marginTop: 8 }}>
					AGREGÁ UN ARCHIVO O ARRASTRALO Y SOLTALO AQUÍ
				</div>
			</div>
		);
		// if (loading) {
		// 	return (
		// 		<div>
		// 			<ProgressBar />
		// 			<Form
		// 				onChange={this.handleChangeInput}
		// 				onClick={this.handleOnclickAddFilm}
		// 			/>
		// 		</div>
		// 	);
		// }
		if (fail) {
			console.log(fail);
			return <ProgressBarFailed />;
		} else {
			return (
				<div>
					<Upload
						name="avatar"
						listType="picture-card"
						className="avatar-uploader"
						showUploadList={false}
						action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
						beforeUpload={beforeUpload}
						onChange={this.handleChange}
					>
						{imageUrl ? (
							<img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
						) : (
							uploadButton
						)}
					</Upload>
					<Form
						onChange={this.handleChangeInput}
						onClick={this.handleOnclickAddFilm}
					/>
				</div>
			);
		}
	}
}
