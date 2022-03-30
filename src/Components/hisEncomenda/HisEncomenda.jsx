import React from "react";
import { useNavigate } from "react-router-dom";
import "./HisEncomenda.css";

const HisEncomenda = () => {
	const navigate = useNavigate();
	return ( 
		<div className="HisEncomenda">
			<h3>Histórico de Encomendas</h3>
			<table className="HisEncomenda_Tabela">
				<thead>
					<tr>
						<th>N.º de Encomenda</th>
						<th>Data (DD/MM/AAAA)</th>
						<th>Estado</th>
						<th>Preço total</th>
					</tr>
				</thead>
				<tbody>
				</tbody>
			</table>
			<div className="HisEncomenda_Compra">
				<h3>Ainda não fizeste a tua primeira compra.</h3>
				<button onClick={() => navigate("/login")}>Fazer a minha primeira Compra</button>
			</div>
		</div>
	);
};
 
export default HisEncomenda;