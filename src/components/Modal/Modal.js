import { React, useState } from "react";
import { Modal } from "antd";

import AddFilm from "../AddFilm/AddFilm";

export default function ModalFilm(props) {
	const [title, setTitle] = useState("AGREGAR PELÍCULA ");

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
					<AddFilm title={title} setTitle={setTitle} />{" "}
				</div>
			</Modal>
		</>
	);
}
