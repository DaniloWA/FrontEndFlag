import React from "react";
import iconsPath from "../../Assets/Images";
import "./Footer.css";

const SocialMedia = () => {
	return (
		<div className="Footer_socialMedia">
			<h2>Social media</h2>
			<ul className="Footer_socialMedialist">
				<li >
					<img src={iconsPath.iconsInstagramFooter} alt="Instagram's icon" />
				</li>
				<li>
					<img src={iconsPath.inconsFacebookFooter } alt="Facebook's Icon" />
				</li>
			</ul>
		</div>
	);
};

export default SocialMedia;
