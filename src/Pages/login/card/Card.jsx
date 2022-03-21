import React , {useState, useContext} from "react";
import "./Card.css";
import {auth ,authLogin, authPass} from "../../../Services/auth";
import { PageContext } from "../../../Services/pageContextProvider";
import routes from "../../../Routes/routes";
import { useNavigate } from "react-router-dom";

const Card = () => {
	const {user} = useContext(PageContext);
	// eslint-disable-next-line no-unused-vars

	const [inputUser, SetInputUser] = useState("john@gmail.com");
	const [inputPass, SetInputPass] = useState("m38rmF$");

	const navigate = useNavigate();
	function handleClick() {
		
		setTimeout(function(){
			navigate(routes.home); 
		}, 3000);//wait 3 seconds
		
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
					<div className="emailConfirm">
						{inputUser ? authLogin(user,inputUser) ? <div>sim</div>: <div>não</div> : ""}
					</div>
					<input
						className="input-email"
						type="email"
						value={inputUser}
						onChange={(e) => SetInputUser(e.target.value)}
					/>
					
				</div>
				<div>
					<div className="senhaConfirm">
						{inputPass ? authPass(user,inputPass) ? <div>sim</div>: <div>não</div> : ""}
					</div>
					
					<input
						className="input-pass"
						type="password"
						value={inputPass}
						onChange={(e) => SetInputPass(e.target.value)}
					/>
					
				</div>
			</div>

			<div className="btn-Login">
				<button onClick={() => {auth(user,inputUser, inputPass) ? handleClick() : console.log("Erro login");}}>Entrar</button>
			</div>
			<div className="text-pass">
				<p>Esqueceu a palavra-passe?</p>
			</div>
		</div>
	);
};

export default Card;

// authLogin(user,inputUser) ? <div>sim</div>: <div>não</div>