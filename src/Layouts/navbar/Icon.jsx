import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import iconsPath from "../../Assets/Images";
import SideCar from "../../Components/SideCar/SideCar";
import { clearLocal } from "../../Middleware/sessionStorage";
import "../../Assets/Styles/NavBar.css";
import { useData } from "../../Services/pageContextProvider";


const Icon = () => {
	const navigate = useNavigate();
	const {setUser, user} = useData();
	const [showcart, setShowcart] = useState(false);
	// eslint-disable-next-line no-unused-vars
	
	// eslint-disable-next-line no-unused-vars
	const [nameUserLogin, setNameUserLogin] = useState(typeof user.currentUser == "string" ?  user.currentUser == "anonymous" ? user.currentUser : JSON.parse(user.currentUser) : user.currentUser);
	console.log(nameUserLogin.username);
	console.log(nameUserLogin);
	

	// eslint-disable-next-line no-unused-vars
	function logOut() {
		console.log("logout");
		setUser({currentUser: {name:"anonymous"}});
		clearLocal("user");
		setNameUserLogin("anonymous");
	}

	useEffect(()=>{
		console.log("antes do useEffect");
		console.log(nameUserLogin == "anonymous");
		setNameUserLogin(nameUserLogin == "anonymous" ? "anonymous" : nameUserLogin);
	
	}, []);

	return (
		<>
			<div id="icons">
				<ul>
					<li className="usuario_select">
						<img
							src={iconsPath.iconLoginNavbar}
							alt="Login"
							onClick={() => navigate("/user")}
						/>
						<span>
							{nameUserLogin.username ? nameUserLogin.username : "login"} 
						</span>
						
						<ul className="dropdowm_menu">
							{nameUserLogin.username ? "" : <li >
								<a href="/login">Login</a>
							</li>} 
							<li>
								<a href="/">Minha conta</a>
							</li>
							<li onClick={() => {
								logOut(), navigate("/login");
							} }> 
								<a href="#" >Terminar sessão</a>

							</li>
						</ul>
					</li>
					<li className="favoritos">
						<img
							src={iconsPath.iconHeartNavbar}
							alt="Favoritos"
							onClick={() => navigate("/Favoritos")}
						/>
						<span>Favorites</span>
					</li>
					<li className="sacola">
						<img
							src={iconsPath.iconShoppingbagNavbar}
							alt="Carrinho"
							onClick={() => setShowcart(true)}
						/>
						<span>Cart</span>
						<span className="sacola_icon">
							<span className="sacola_item">1</span>
						</span>
					</li>
				</ul>
			
			</div>
			{showcart ? <SideCar /> : ""}
		</>
	);
};

export default Icon;
