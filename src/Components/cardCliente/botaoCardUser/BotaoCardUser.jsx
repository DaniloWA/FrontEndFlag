import React from "react";
import "./BotaoCardUser.css";
// eslint-disable-next-line react/prop-types
const BotaoCardUser = ({funcRender}) => {
	return (
		<div className="CardCliente_Botao">
			<button onClick={funcRender}>Edit</button>
		</div>
	);
};
 
export default BotaoCardUser;