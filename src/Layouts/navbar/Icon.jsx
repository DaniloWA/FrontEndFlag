import React from "react";
import { useNavigate } from "react-router-dom";
import heart from "../../assets/images/heart64.png";
import user from "../../assets/images/user64.png";
import shoppingBag from "../../assets/images/shopping-bag64.png";

const Icon = () => {
	const navigate = useNavigate();

	return (
		<div className="icons">
			<img src={heart} alt="Favorito" onClick={() => navigate("/Favoritos")} />
			<img src={user} alt="Login" onClick={() => navigate("/Cliente")} />
			<img
				src={shoppingBag}
				alt="Carrinho"
				onClick={() => navigate("/Carrinho")}
			/>
		</div>
	);
};

export default Icon;
