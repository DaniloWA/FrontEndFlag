import React from "react";
import "./CardCliente.css";
// eslint-disable-next-line react/prop-types
const CardCliente = ({children}) => {
	return ( 
		<div className="CardCliente">
			{children}
		</div> 
	);
};
 
export default CardCliente;