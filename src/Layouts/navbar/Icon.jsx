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
	//const [count, setCount] = useState(0);
	const [userConfirmation, setUserConfirmation ] = useState(user.userlogged);
	function logOut() {
		setUser({currentUser: {name:"anonymous"}});
		clearLocal("user");
		setNameUserLogin("anonymous");
	}

	useEffect(()=>{
		setNameUserLogin(nameUserLogin == "anonymous" ? "anonymous" : JSON.parse(user.currentUser));
		console.log(user.userlogged, "userlogged useeffect");
		setUserConfirmation(user.userlogged);
	
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
							{userConfirmation ? nameUserLogin.username : "login"} 
						</span>
						
						<ul className="dropdowm_menu">
							{userConfirmation ? "" : <li >
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
							<span className="sacola_item">0</span>
						</span>
					</li>
				</ul>
			
			</div>
			{showcart ? <SideCar /> : ""}
		</>
	);
};

export default Icon;
