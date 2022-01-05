import React from "react";

export default function Form(props) {
	function handleChangeInput(event) {
		props.onChange(event);
	}

	function handleLocalStorage(event) {
		props.onClick(event);
	}
	return (
		<div>
			<form className="form" onSubmit={handleLocalStorage}>
				<input
					type="text"
					name="title"
					required
					className="title"
					placeholder="TITLE"
					id="titleFilm"
					onChange={handleChangeInput}
				/>{" "}
				<button
					className="btnUpload"
					// onClick={handleLocalStorage}
					// onClick=
					type="submit"
				>
					SUBIR PELÍCULA{" "}
				</button>{" "}
			</form>{" "}
		</div>
	);
}
