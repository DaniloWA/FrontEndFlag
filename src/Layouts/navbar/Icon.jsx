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
	//soma final dos produtos na carrinho para o checkout, o que leva para os prdutos
	const navigate = useNavigate();
	const { setUser, user, car } = useData();
	const [carLength, setCarLength] = useState(0);
	// eslint-disable-next-line no-unused-vars
	const [carUpdate, setCarUpdate] = useState(false);
	const [showcart, setShowcart] = useState(false);
	const [nameUserLogin, setNameUserLogin] = useState(user.currentUser);
	const [userConfirmation, setUserConfirmation] = useState(user.userlogged);

	function logOut() {
		setUser({ currentUser: { name: "anonymous" } });
		clearLocal("user");
		setNameUserLogin("anonymous");
	}

	useEffect(() => {
		setNameUserLogin(
			nameUserLogin == "anonymous" ? "anonymous" : user.currentUser
		);
		setUserConfirmation(user.userlogged);
		setCarLength(car.products ? car.products.length : 0);
	}, [nameUserLogin, user, userConfirmation, car]);

	return (
		<>
			<div id="icons">
				<ul>
					<li className="Icon_user">
						{userConfirmation ? (
							<img
								src={iconsPath.iconLoginNavbar}
								alt="Login"
								onClick={() => navigate(routes.cliente)}
							/>
						) : (
							<img
								src={iconsPath.iconLoginNavbar}
								alt="Login"
								onClick={() => navigate(routes.login)}
							/>
						)}

						<span>{userConfirmation ? nameUserLogin.username : "Login"}</span>

						<ul className="Icon_DropdownMenu">
							{userConfirmation ? (
								<>
									<li>
										<Link to={routes.cliente}>Account</Link>
									</li>
									<li
										onClick={() => {
											logOut(), navigate(routes.inicio);
										}}
									>
                    Logout
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
							onClick={() => navigate("/")}
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
							<span className="Icon_bagItem">{carLength}</span>
						</span>
					</li>
				</ul>
			</div>
			{showcart ? <SideCar setShowcart={setShowcart} /> : ""}
		</>
	);
};

export default Icon;
