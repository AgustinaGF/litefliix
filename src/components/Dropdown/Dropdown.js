import React from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import viewIcon from "../../assets/View.png";

export default function MenuFilm() {
	const menu = (
		<Menu className="containerDropdown">
			<Menu.Item className="popular" key="0">
				<a href="">
					<b>POPULARES</b>
				</a>
				<img src={viewIcon} alt="view icon" className="viewIcon"></img>
			</Menu.Item>
			<Menu.Item className="myFilms" key="1">
				<a href="">mis películas</a>
			</Menu.Item>
		</Menu>
	);
	return (
		// <span className="containerMenu">
		<div className="menuFilm">
			<Dropdown overlay={menu} trigger={["click"]}>
				<a className="dropdown" onClick={(e) => e.preventDefault()}>
					VER <b>POPULARES</b> <DownOutlined />
				</a>
			</Dropdown>
		</div>
	);
}
