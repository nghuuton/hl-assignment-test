import React from "react";
import logo from "../../assets/images/game-center.png";
import avatar from "../../assets/images/user.png";
import "./header.css";

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
	return (
		<div className="header">
			<div className="logo">
				<img src={logo} alt="logo" width="100%" />
			</div>
			<div className="avatar">
				<div className="account">
					<span className="username">Handicrafted by</span>
					<span>Jim HLS</span>
				</div>
				<img src={avatar} alt="avatar" width="70px" />
			</div>
		</div>
	);
};

export default Header;
