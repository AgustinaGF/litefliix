import React from "react";
import { Progress } from "antd";

export default function ProgressBarFailed() {
	return (
		<div>
			<Progress percent={70} status="exception" />
		</div>
	);
}
