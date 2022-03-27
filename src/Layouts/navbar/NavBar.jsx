import React from "react";
import "../../Assets/Styles/NavBar.css";
import Icon from "./Icon";
import Logo from "./Logo";
import Pesquisa from "./Pesquisa";


export default function NavBar() {
	return (
		<>
			<header>
				<nav className="nav">
					<Logo onClick="onClick" />
					<Pesquisa/>
					<Icon onClick="onClick"/>
				</nav>
			</header>
			
		</>
		
	);
}
