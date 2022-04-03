import React from "react";
import "./EditCliente.css";

// eslint-disable-next-line react/prop-types
const EditCliente = ({handleCloseClick}) => {
	return (
		<div className="EditCliente">
			<div className="EditCliente_CenterOverflow">
				<div className="EditCliente_Title">
					<h1>Detalhes de conta</h1>
				</div>
				<div className="EditCliente_Fechar">
					<button onClick={handleCloseClick}>X</button>
				</div>
				<div className="EditCliente_InputGroup">
					<div className="EditCliente_InpuEsquerda">
						<input type="text" placeholder="Nome" />
						<input type="text" placeholder="Sobrenome" />
						<input type="email" placeholder="Email" />
						<input type="tel" placeholder="Nº de telemóvel" />
						
					</div>
					<div className="EditCliente_InputBaixo">
						<input type="text" placeholder="Endereço" />
					</div>
					<div className="EditCliente_InpuDireita">
						<input type="text" placeholder="Código Postal" />
						<input type="text" placeholder="Cidade" />
						<input type="text" placeholder="Região" />
						<input type="text" placeholder="País" />
					</div>
				</div>
				<div className="EditCliente_Btn">
					<button onClick={handleCloseClick}>Guardar</button>
				</div>
			</div>
		</div>
	);
};

export default EditCliente;
