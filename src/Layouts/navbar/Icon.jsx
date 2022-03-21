import React from "react";
import { useNavigate } from "react-router-dom";
import heart from "../../Assets/Images/heart64.png";
import user from "../../Assets/Images/user64.png";
import shoppingBag from "../../Assets/Images/shopping-bag64.png";
import "../../Assets/Styles/NavBar.css";

const Icon = () => {
	const navigate = useNavigate();

	return (
		<div className="icons">
			<img src={heart} alt="Favorito" onClick={() => navigate("/Favoritos")} />

			<img src={user} alt="Login" />
			<select className="opcao">
				<option value="Minha área">Minha área</option>
				<option value="Login">Login</option>
			</select>
			
			<img
				src={shoppingBag}
				alt="Carrinho"
				onClick={() => navigate("/Carrinho")}
			/>
		</div>
	);
};

export default Icon;
