import React from "react";
import { useNavigate } from "react-router-dom";
import iconsPath from "../../Assets/Images";
import "./HisEncomenda.css";

const HisEncomenda = () => {
	const navigate = useNavigate();
	return (
		<div className="HisEncomenda">
			<h3>Order History</h3>
			<table className="HisEncomenda_Tabela">
				<thead>
					<tr>
						<th>Order N.º</th>
						<th>Data (DD/MM/YYYYYY)</th>
						<th>Status</th>
						<th>Total Price</th>
					</tr>
				</thead>
				<tbody></tbody>
			</table>
			<div className="HisEncomenda_Compra">
				<img src={iconsPath.iconCarrinho} alt="Icon-Carrinho" />
				<h3>You have not made your first purchase yet.</h3>
				<button onClick={() => navigate("/login")}>
				Make my first purchase
				</button>
			</div>
		</div>
	);
};

export default HisEncomenda;
