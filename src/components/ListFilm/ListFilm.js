import { React, useState } from "react";
import FullList from "./FullList";

export default function ListFilm(props) {
	const [list, setList] = useState(props.props);
	console.log(list);
	// let list = props.props;
	return (
		<div>
			{list.map((element) => {
				console.log(element.titleFilm);
				return <FullList title={element.titleFilm} img={element.imgFilm} />;
			})}
		</div>
	);
}
