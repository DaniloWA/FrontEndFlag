import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import iconsPath from "../../Assets/Images";
import SideCar from "../../Components/SideCar/SideCar";

import "../../Assets/Styles/NavBar.css";

const Icon = () => {
	const navigate = useNavigate();

	const [showcart, setShowcart] = useState(false);

	return (
		<div id="icons">
			<ul>
				<li className="usuario_select">
					<img
						src={iconsPath.user}
						alt="Login"
						onClick={() => navigate("/user")}
					/>

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
						src={iconsPath.shoppingBag}
						alt="Carrinho"
						onClick={() => setShowcart(true)}
					/>
					{showcart ? <SideCar /> : ""}

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
