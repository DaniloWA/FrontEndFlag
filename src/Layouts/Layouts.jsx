/* eslint-disable react/prop-types */
import React from "react";
import "./Layouts.css";

const Layouts = ({ children }) => {

	return ( 
		<div className="Layouts">
			{children}
		</div>
	);
};
 
export default Layouts;