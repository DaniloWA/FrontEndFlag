import React from "react";
import "../../Assets/Styles/NavBar.css";
import Icon from "./Icon";
import Logo from "./Logo";
// eslint-disable-next-line no-unused-vars
import Pesquisa from "./Pesquisa";


export default function NavBar() {
	return (
		<header >
			<nav className="NavBar">
				<Logo onClick="onClick" />
				<Icon onClick="onClick"/>
			</nav>
		</header>
	);
}
