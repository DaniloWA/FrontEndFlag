/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Card.css";
import { useData } from "../../../Services/pageContextProvider";
import routes from "../../../Routes/routes";
import { useNavigate } from "react-router-dom";
import { authLoginNew } from "../../../Services/auth";
import iconsPath from "../../../Assets/Images";
import { getLocal, setLocal } from "../../../Middleware/sessionStorage";

const Card = () => {
	const { user, setUser } = useData();
	const navigate = useNavigate();
	const errorStyle = {
		border: "3px solid red",
		borderTop: "none",
		borderLeft:"none" ,
		borderRight: "none",
	};

	const [inputUser, SetInputUser] = useState("mor_2314");
	const [inputPass, SetInputPass] = useState("83r5^_");
	const [hasError, setHasError] = useState(false);

	useEffect(() => {
		const userStorage = getLocal("user");
		if (userStorage != "anonymous") {
			console.log("Card IF USER");
			setUser(userStorage);
		} else {
			setUser({ name: "anonymous" });
			setLocal("user", "anonymous");
		}
	}, []);

	async function handleSubmit() {
		try {
			const response = await authLoginNew(inputUser, inputPass);
			setHasError(false);
			setUser(response);
			setLocal("user", JSON.stringify(response));
			setTimeout(function () {
				navigate(routes.inicio);
			}, 0); //wait 3 seconds
		} catch (error) {
			setHasError(true);
			console.warn("error :: :" + error);
		}
	}
	function handleNameChange({ target: { value } }) {
		SetInputUser(value);
		setHasError(false);
	}

	function handlePasswordChange({ target: { value } }) {
		SetInputPass(value);
		setHasError(false);
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
						<input style={hasError ? errorStyle : null}
							className="input-email"
							type="email"
							value={inputUser}
							onChange={handleNameChange}
						/>
					</div>
				</div>
				<div>
					<div className="div-input-pass">
						<input  style={hasError ? errorStyle : null}
							className="input-pass"
							type="password"
							value={inputPass}
							onChange={handlePasswordChange}
						/>
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
