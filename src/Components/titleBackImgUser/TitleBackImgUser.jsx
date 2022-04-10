/* eslint-disable react/prop-types */
import React from "react";
import "./TitleBackImgUser.css";
const TitleBackImgUser = (props) => {
	return (  
		<div className="TitleBackImgUser">
			<h1>{props.tituloBackImgUser}</h1>
		</div>
	);
};
 
export default TitleBackImgUser;