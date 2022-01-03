import React from "react";
import LITEFLIX from "../../assets/LITEFLIX.png";
import Link from "../../assets/Link.png";
import Menu from "../../assets/Menu.png";
import Notification from "../../assets/Notification.png";
import Profile from "../../assets/Profile.png";
import AddFilm from "../../assets/AddFilm.png";

export default function Header() {
	return (
		<div className="containerHeader">
			<div className="containerLogo">
				<img src={AddFilm} alt="add film icon " className="addFilm" />
				<img src={LITEFLIX} alt="liteflix icon" className="liteflix" />
				<img src={Link} alt="link icon" className="linkIcon" />
			</div>
			<div className="containerMenu">
				<img src={Menu} alt="menu icon" className="menuIcon" />
				<img
					src={Notification}
					alt="notification icon"
					className="notificationIcon"
				/>
				<img src={Profile} alt="profile icon" className="profileIcon" />
			</div>
		</div>
	);
}
