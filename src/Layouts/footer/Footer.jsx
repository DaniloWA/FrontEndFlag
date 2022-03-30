import React from "react";
import InformationsFooter from "./Informations";
import SectionToNav from "./SectionToNav";
import "./Footer.css";
import SocialMedia from "./SocialMedia";
import MadeBy from "./MadeBy";

const Footer = () => {
	return (
		<footer className="footer">
			<section className="footer_section">
				<InformationsFooter />
				<SectionToNav />
				<SocialMedia />
			</section>	
			<MadeBy/>	
		</footer>
	);
};

export default Footer;
