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
	const navigate = useNavigate(); 
	const { setUser, user } = useData(); 
	const [showcart, setShowcart] = useState(false);
	const [nameUserLogin, setNameUserLogin] = useState(user.currentUser);
	const [userConfirmation, setUserConfirmation ] = useState(user.userlogged);

	function logOut() {
		setUser({ currentUser: { name: "anonymous" } });
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
			{showcart ? <SideCar setShowcart={setShowcart} /> : ""}
		</>
	);
};

export default Icon;
