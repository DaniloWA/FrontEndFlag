import React from "react";
import { useNavigate } from "react-router-dom";
import user from "../../Assets/Images/user64.png";
import heart from "../../Assets/Images/heart64.png";
import shoppingBag from "../../Assets/Images/shopping-bag64.png";
import "../../Assets/Styles/NavBar.css";
//import { css } from "@emotion/css";

const Icon = () => {
	const navigate = useNavigate();

	return (
		<div id="icons">
			<ul>
				<li className="usuario_select">
					<img src={user} alt="Login" />
					<span>Login</span>
					<ul className="dropdowm_menu">
						<li>
							<a href="/login">Login</a>
						</li>
						<li>
							<a href="/">Minha conta</a>
						</li>
						<li>
							<a href="/login">Terminar sessão</a>
						</li>
					</ul>
				</li>
				<li className="favoritos">
					<img
						src={heart}
						alt="Favoritos"
						onClick={() => navigate("/Favoritos")}
					/>
					<span>Favorites</span>
				</li>
				<li className="sacola">
					<img
						src={shoppingBag}
						alt="Carrinho"
						onClick={() => navigate("/Carrinho")}
					/>
					<span>Your cart</span>
					<span className="sacola_icon">
						<span className="sacola_item">1</span>
					</span>
				</li>
			</ul>
		</div>
	);
};

export default Icon;
