import React from "react";
import MadeBy from "./MadeBy";
import InformationsFooter from "./InformationsFooter";
import SectionToNav from "./SectionToNav";
import SocialMedia from "./SocialMedia";
import "./Footer.css";

const Footer = () => {
	return (
		<footer className="footer">
			<section className="footer_section">
				<InformationsFooter/>
				<SectionToNav/>
				<SocialMedia/>
			</section>
			<MadeBy/>
		</footer>
	);
};

export default Footer;
