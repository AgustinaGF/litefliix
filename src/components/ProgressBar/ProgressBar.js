import { Progress } from "antd";
import React from "react";

export default function ProgressBar() {
	return (
		<div>
			<Progress percent={50} status="active" />
		</div>
	);
}
