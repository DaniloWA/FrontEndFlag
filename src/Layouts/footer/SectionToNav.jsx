import React from "react";
import { Link } from "react-router-dom";
import routes from "../../Routes/routes";
import "./Footer.css";

const SectionToNav = () => {
	return (
		<div className="footer_sectionToNav">
			<h2>Section</h2>
			<ul className="footer_linkNav">
				<Link to={routes.login} className="footer_sectionToNavlogin">Login</Link>
				<Link to={routes.favorites} className="footer_sectionToNavfavorites">Favorites</Link>
			</ul>
		</div>
	);
};

export default SectionToNav;
