import React from "react";
import { Link } from "react-router-dom";
import routes from "../../Routes/routes";

const SectionToNav = () => {
	return (
		<div className="sectionToNav">
			<h2>Session</h2>
			<ul className="sectionToNav_linkToNav">
				<Link to={routes.login}>Login</Link>
				<Link to={routes.favorites}>Favorite</Link>
			</ul>
		</div>
	);
};
 
export default SectionToNav;