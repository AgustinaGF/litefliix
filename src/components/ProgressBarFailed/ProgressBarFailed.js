import React from "react";
import { Progress } from "antd";
import Form from "../Form/Form";

export default function ProgressBarFailed() {
	return (
		<div>
			<h2 className="error">
				<b> ¡ERROR! </b>NO SE PUDO CARGAR LA PELÍCULA{" "}
			</h2>
			<Progress percent={100} status="exception" />
			<h3 className="tryAgain"> REINTENTAR </h3>
			<div className="containerForm">
				<Form />
			</div>
		</div>
	);
}
