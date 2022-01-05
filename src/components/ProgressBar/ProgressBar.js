import { Progress } from "antd";
import React from "react";

export default function ProgressBar(percent) {
	console.log(percent);
	return (
		<div className="containerProgressBar">
			<p>CARGANDO 40%</p>
			<Progress percent={40} status="active" />
		</div>
	);
}
