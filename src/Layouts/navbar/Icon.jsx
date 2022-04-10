import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import iconsPath from "../../Assets/Images";
import SideCar from "../../Components/SideCar/SideCar";
import { clearLocal } from "../../Middleware/sessionStorage";
import "./NavBar.css";
import { useData } from "../../Services/pageContextProvider";
import routes from "../../Routes/routes";
import { Link } from "react-router-dom";

const Icon = () => {
	// login name
	const navigate = useNavigate(); // navegar nas paginas
	const { setUser, user } = useData(); //tem as infos do usuario
	const isUserLogged = () => typeof user.currentUser == "string" ? user.currentUser == "anonymous" ? user.currentUser : JSON.parse(user.currentUser)
		: user.currentUser; //função, confirma 

	const [showcart, setShowcart] = useState(false);
	
	const [nameUserLogin, setNameUserLogin] = useState(isUserLogged());

	const [userConfirmation, setUserConfirmation] = useState(user.userlogged);

	function logOut() {
		setUser({ currentUser: { name: "anonymous" } });
		clearLocal("user");
		setNameUserLogin("anonymous");
	}

	console.log(userConfirmation, "antes do effect");
	console.log(user, "user");
	console.log(user.currentUser, "user.currentuser");
	console.log(user.userlogged, "userLogged");

	useEffect(() => {
		const userName = isUserLogged();
		setNameUserLogin(
			userName == "anonymous" ? (user.currentUser) : "anonymous"
		);
		console.log(userName, "userlogged useeffect");
		setUserConfirmation(user);
	}, [user]);
	console.log(user.userlogged, "userLogged");

	console.log(userConfirmation, "depois do effect");

	return (
		<>
			<div id="icons">
				<ul>
					<li className="Icon_user">
						{userConfirmation ? <img
							src={iconsPath.iconLoginNavbar}
							alt="Login"
							onClick={() => navigate("/user")}	
						/> : <img
							src={iconsPath.iconLoginNavbar}
							alt="Login"
							onClick={() => navigate("/login")}	
						/>}
					
						<span>{userConfirmation ? nameUserLogin.username : "Login"}</span>

						<ul className="Icon_DropdownMenu">
							{userConfirmation ? (
								<>
									<li>
										<Link to={routes.cliente}>Minha conta</Link>

									</li>
									<li
										onClick={() => {
											logOut(), navigate(routes.inicio);
										}}
									>
										Terminar sessão
									</li>
								</>
							) : (
								""
							)}
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
					<li className="Icon_bag">
						<img
							src={iconsPath.iconShoppingbagNavbar}
							alt="Carrinho"
							onClick={() => setShowcart(true)}
						/>
					
						<span>Cart</span>
						<span className="Icon_bagNum">
							<span className="Icon_bagItem">0</span>
						</span>
					</li>
				</ul>
			</div>
			{showcart ? <SideCar /> : ""}
		</>
	);
};

export default Icon;
