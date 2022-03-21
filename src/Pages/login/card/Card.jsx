/* eslint-disable react/prop-types */
import React from "react";
import "./Card.css";

const Card = ({ setLogin, login }) => {
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
						value={login.username}
						onChange={(e) => setLogin({ ...login, username: e.target.value })}
					/>
				</div>
				<div>
					<input
						className="input-pass"
						type="password"
						value={login.password}
						onChange={(e) => setLogin({ ...login, password: e.target.value })}
					/>
				</div>
			</div>

			<div className="btn-Login">
				<button onClick={() => {}}>Entrar</button>
			</div>
			<div className="text-pass">
				<p>Esqueceu a palavra-passe?</p>
			</div>
		</div>
	);
};

export default Card;
