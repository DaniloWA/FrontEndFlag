import React , {useState} from "react";
import "./Card.css";
import auth from "../auth";

const Card = () => {
	const [inputUser, SetInputUser] = useState("");
	const [inputPass, SetInputPass] = useState("");
	function passandoInfo(login,senha){
		auth(login,senha);
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
					<input
						className="input-email"
						type="email"
						value={inputUser}
						onChange={(e) => SetInputUser(e.target.value)}
					/>
				</div>
				<div>
					<input
						className="input-pass"
						type="password"
						value={inputPass}
						onChange={(e) => SetInputPass(e.target.value)}
					/>
				</div>
			</div>

			<div className="btn-Login">
				<button onClick={() => {passandoInfo(inputUser, inputPass);}}>Entrar</button>
			</div>
			<div className="text-pass">
				<p>Esqueceu a palavra-passe?</p>
			</div>
		</div>
	);
};

export default Card;
