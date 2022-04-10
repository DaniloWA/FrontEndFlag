import React from "react";
import MadeBy from "./MadeBy";
import InformationsFooter from "./InformationsFooter";
import SectionToNav from "./SectionToNav";
import SocialMedia from "./SocialMedia";
import "./Footer.css";

const Footer = () => {
	return (
		<footer className="Footer">
			<section className="Footer_section">
				<InformationsFooter/>
				<SectionToNav/>
				<SocialMedia/>
			</section>
			<MadeBy/>
		</footer>
	);
};

export default Footer;
