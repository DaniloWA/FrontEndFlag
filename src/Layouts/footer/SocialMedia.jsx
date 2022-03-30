import React from "react";
import iconsPath from "../../Assets/Images";
import "./Footer.css";

const SocialMedia = () => {
	return ( 
		<div className="socialMedia_footer">
			<h2>Social Media</h2>
			<ul className="socialMedia_footer_list">
				<li>
					<img src={iconsPath.instagram} alt="Instgram's icon" />
				</li>
				<li>
					<img src={iconsPath.facebook} alt="Facebook's icon" />
				</li>
			</ul>
		</div>
	);
};
 
export default SocialMedia;