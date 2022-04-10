import React, { useState } from "react";
import "./Card.css";
import { useData } from "../../../Services/pageContextProvider";
import routes from "../../../Routes/routes";
import { useNavigate } from "react-router-dom";
import { authLoginNew } from "../../../Services/auth";
import {setLocal } from "../../../Middleware/sessionStorage";
import Loading from "../../../Components/loading/Loading";

const Card = () => {
	const {setUser } = useData();
	const navigate = useNavigate();

	const errorStyle = {
		border: "3px solid red",
		borderTop: "none",
		borderLeft:"none" ,
		borderRight: "none",
	};

	const errorText = {
		display: "none",
	};
	
	const [inputUser, SetInputUser] = useState("mor_2314");
	const [inputPass, SetInputPass] = useState("83r5^_");

	const [hasError, setHasError] = useState(false);
	const [load, setLoad] = useState(false);

	async function handleSubmit() {
		setLoad(true);
		try {
			const response = await authLoginNew(inputUser, inputPass);
			setHasError(false);
			setUser({userlogged: true, currentUser: response});
			setLocal("user", JSON.stringify(response));
			setTimeout(function () {
				navigate(routes.inicio);
				setLoad(false);
			}, 3000); //wait 3 seconds
		} catch (error) {
			setHasError(true);
			setLoad(false);
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
		<>
			{load ? <Loading></Loading> : ""}
			<div className="Card">
				<div className="title">
					<h1>Sign in</h1>
					<p>
          New Customer?
						<a href="#">
							<span> Start Here</span>.
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
						<p style={!hasError ? errorText : null} className="errorTxt"> UserName or Passowrd are incorrect! </p>
					</div>
				</div>	
				{ }
				<div className="btn-Login">
					<button
						onClick={() => {
							handleSubmit();
						}}
						disabled={inputPass && inputUser ? false : true}
					>
          Sign in
					</button>
				</div>
				<div className="text-pass">
					<p>Forgot your password?</p>
				</div>
			</div>
		</>
		
	);
};

export default Card;
