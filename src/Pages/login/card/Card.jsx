import React , {useState} from "react";
import "./Card.css";
import { authLogin, authPass} from "../../../Services/auth";
import { useData } from "../../../Services/pageContextProvider";
import routes from "../../../Routes/routes";
import { useNavigate } from "react-router-dom";

const Card = () => {
	const {user} = useData();
	const navigate = useNavigate();

	const [inputUser, SetInputUser] = useState("mor_2314");
	const [inputPass, SetInputPass] = useState("83r5^_");
	// eslint-disable-next-line no-unused-vars
	const [hasError, setHasError] = useState(false);

	// eslint-disable-next-line no-unused-vars
	async function handleSubmit(){
		try {
			const response = await fetch(`https://edit-shop-api.herokuapp.com/api/login?username=${inputUser}&password=${inputPass}`);
			const userF = await response.json();
			console.log(userF);
			handleClick();
		} catch(error) {
			console.warn ("We will handle this error: ", error);
			// eslint-disable-next-line no-undef
			setHasError(true);
		}
	}

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
				<button onClick={() => {handleSubmit();}}>Entrar</button>
			</div>
			<div className="text-pass">
				<p>Esqueceu a palavra-passe?</p>
			</div>
		</div>
	);
};

export default Card;

// authLogin(user,inputUser) ? <div>sim</div>: <div>não</div>