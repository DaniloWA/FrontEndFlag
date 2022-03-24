/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Card.css";
import { useData } from "../../../Services/pageContextProvider";
import routes from "../../../Routes/routes";
import { useNavigate } from "react-router-dom";
import { authLoginNew } from "../../../Services/auth";
import iconsPath from "../../../Assets/Images";

const Card = () => {
	const { user } = useData();
	const navigate = useNavigate();

	const [inputUser, SetInputUser] = useState("mor_2314");
	const [inputPass, SetInputPass] = useState("83r5^_");

	const [hasError, setHasError] = useState();

	async function handleSubmit() {
		try {
			const response = await authLoginNew(inputUser, inputPass); 
			console.log(response);
			setHasError(false);
		} catch (error) {
			setHasError(true);
			console.warn("error :: :" + error);
		}
		handleClick();
	}
	console.log("Tem erro : " + hasError);
	function handleClick() {
		if(hasError == false){
			setTimeout(function () {
			
				console.log("Logou ##");
			//navigate(routes.home);
			}, 0); //wait 3 seconds
		}
			
	}

	function handleNameChange({ target : {value } }){
		SetInputUser(value);

	}

	function handlePasswordChange({ target : {value } }){
		SetInputPass(value);
	}
	return (
		<div className="Card">
			<div className="title">
				<h1>Entrar</h1>
				<p>
          Novo cliente?
					<a href="#">
						<span> Registar-me</span>.
					</a>
				</p>
			</div>
			<div className="input">
				<div>
					<div className="div-input-email">
						<input
							className="input-email"
							type="email"
							value={inputUser}
							onChange={handleNameChange}
						/>
						<img src={inputUser ? hasError ? iconsPath.iconErroLogin : iconsPath.iconCertoLogin : iconsPath.iconDefaultLogin} alt="icon" />
					</div>
					
				</div>
				<div>

					<div className="div-input-pass">
						<input
							className="input-pass"
							type="password"
							value={inputPass}
							onChange={handlePasswordChange}
						/>
						<img src={inputPass ? hasError ? iconsPath.iconErroLogin : iconsPath.iconCertoLogin : iconsPath.iconDefaultLogin} alt="icon" />
					</div>
					
				</div>
			</div>

			<div className="btn-Login">
				<button
					onClick={() => {
						handleSubmit();
					}}
				>
          Entrar
				</button>
			</div>
			<div className="text-pass">
				<p>Esqueceu a palavra-passe?</p>
			</div>
		</div>
	);
};

export default Card;
