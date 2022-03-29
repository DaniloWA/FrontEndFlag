import React from "react";

// eslint-disable-next-line react/prop-types
const InfoCardUser = ({nome , desc}) => {
	return ( 
		<div className="CardCliente_Info">
			<p>{nome}</p>	
			<p>{desc}</p>
		</div>
	);
};
 
export default InfoCardUser;