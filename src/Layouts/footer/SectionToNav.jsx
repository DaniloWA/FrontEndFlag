import React from "react";
import { Link } from "react-router-dom";
import routes from "../../Routes/routes";
import "./Footer.css";

const SectionToNav = () => {
	return (
		<div className="Footer_sectionToNav">
			<h2>Section</h2>
			<ul className="Footer_linkNav">
				<Link to={routes.login} className="Footer_sectionToNavlogin">Login</Link>
				<Link to={routes.favorites} className="Footer_sectionToNavfavorites">Favorites</Link>
			</ul>
		</div>
	);
};

export default SectionToNav;
