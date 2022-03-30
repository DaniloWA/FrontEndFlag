/* eslint-disable react/prop-types */
import React from "react";

const DetalhesCardUser = ({title, desc}) => {
	return ( 
		<div className="CardCliente_Detalhes">
			<p>{title}</p>
			<p>{desc}</p>
		</div>
	);
};
 
export default DetalhesCardUser;