import React from "react";
import loading from "../../assets/loading.gif";

export default function Loader() {
	return (
		<div className="coverContainer">
			<img src={loading} alt="loadind" className="loading"></img>{" "}
		</div>
	);
}
