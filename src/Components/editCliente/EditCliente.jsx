import React from "react";
import "./EditCliente.css";

// eslint-disable-next-line react/prop-types
const EditCliente = ({handleCloseClick}) => {
	return (
		<div className="EditCliente">
			<div className="EditCliente_CenterOverflow">
				<div className="EditCliente_Title">
					<h1>Editar detalhes de conta</h1>
				</div>
				<div className="EditCliente_Fechar">
					<button onClick={handleCloseClick}>X</button>
				</div>
				<div className="EditCliente_InputGroup">
					<div className="EditCliente_InpuEsquerda">
						<input type="text" />
						<input type="text" />
						<input type="text" />
						<input type="text" />
						<input type="text" />
					</div>
					<div className="EditCliente_InpuDireita">
						<input type="text" />
						<input type="text" />
						<input type="text" />
						<input type="text" />
						<input type="text" />
					</div>
				</div>
				<div className="EditCliente_Btn">
					<button>Guardar</button>
				</div>
			</div>
		</div>
	);
};

export default EditCliente;
