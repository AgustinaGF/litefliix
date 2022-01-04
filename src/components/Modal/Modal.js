import React from "react";
import { Modal } from "antd";
import Avatar from "../AddFilm/AddFilm";

export default function ModalFilm(props) {
	return (
		<>
			<Modal
				visible={props.showModal}
				onCancel={props.onClose}
				footer={null}
				className="modalFilm"
			>
				<p className="titleAddFilm">AGREGAR PELÍCULA</p>

				<Avatar />
			</Modal>
		</>
	);
}
