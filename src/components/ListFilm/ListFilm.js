import { React, useState } from "react";
import FullList from "./FullList";

import { Modal } from "antd";

export default function ListFilm(props) {
	let list = props.props;

	return (
		<>
			<Modal
				visible={props.showModal}
				onCancel={props.onClose}
				footer={null}
				className="modalFilm"
			>
				<p className="titleAddFilm"> TUS PELICULAS </p>
				<div>
					{list.map((element) => {
						console.log(element.titleFilm);
						return (
							<FullList title={element.titleFilm} key={element.titleFilm} />
						);
					})}
				</div>
			</Modal>
		</>
	);
}
