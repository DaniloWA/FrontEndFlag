import React from "react";
import { useNavigate } from "react-router-dom";
import iconsPath from "../../Assets/Images";
import "../../Assets/Styles/NavBar.css";


const Icon = () => {
	const navigate = useNavigate();

	return (
		<div id="icons">
			<ul>
				<li className="usuario_select">
					<img src={iconsPath.user} alt="Login" />
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
						src={iconsPath.heart}
						alt="Favoritos"
						onClick={() => navigate("/Favoritos")}
					/>
					<span>Favorites</span>
				</li>
				<li className="sacola">
					<img
						src={iconsPath.shoppingbag}
						alt="Carrinho"
						onClick={() => navigate("/Carrinho")}
					/>
					<span>Cart</span>
					<span className="sacola_icon">
						<span className="sacola_item">1</span>
					</span>
				</li>
			</ul>
		</div>
	);
};

export default Icon;
