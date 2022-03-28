import React from "react";
import "./BoxCard.css";

// eslint-disable-next-line react/prop-types
const BoxCard = ({children}) => {
	return ( <div className="BoxCard">
		{children}
	</div> );
};
 
export default BoxCard;