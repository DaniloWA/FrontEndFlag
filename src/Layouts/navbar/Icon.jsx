import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import iconsPath from "../../Assets/Images";
import SideCar from "../../Components/SideCar/SideCar";
import { clearLocal } from "../../Middleware/sessionStorage";
import "./NavBar.css";
import { useData } from "../../Services/pageContextProvider";
import routes from "../../Routes/routes";


const Icon = () => {
	const navigate = useNavigate();
	const {setUser, user} = useData();
	const [showcart, setShowcart] = useState(false);
	const [nameUserLogin, setNameUserLogin] = useState(user.currentUser);
	//const [count, setCount] = useState(0);
	const [userConfirmation, setUserConfirmation ] = useState(user.userlogged);
	function logOut() {
		setUser({currentUser: {name:"anonymous"}});
		clearLocal("user");
		setNameUserLogin("anonymous");
	}

	useEffect(()=>{
		setNameUserLogin(nameUserLogin == "anonymous" ? "anonymous" : user.currentUser);
		setUserConfirmation(user.userlogged);
	}, [nameUserLogin,user,userConfirmation]);
	
	return (
		<>
			<div id="icons">
				<ul>
					<li className="Icon_user">
						<img
							src={iconsPath.iconLoginNavbar}
							alt="Login"
							onClick={() => navigate("/user")}
						/>
						<span>
							{userConfirmation ? nameUserLogin.username : "Login"} 
						</span>
						
						<ul className="Icon_DropdownMenu">
							{userConfirmation ? "" : <li >
								<a href="/login">Login</a>
							</li>} 
							<li>
								<a href="/">Minha conta</a>
							</li>
							{userConfirmation ? <li onClick={() => {
								logOut(), navigate(routes.inicio);
							} }> 
								<a href="#" >Terminar sessão</a>

							</li> : ""}
							
						</ul>
					</li>
					<li className="Icon_favoritos">
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
			{showcart ? <SideCar setShowcart={setShowcart} /> : ""}
		</>
	);
};

export default Icon;
