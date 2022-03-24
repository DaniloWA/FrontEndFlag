import React from "react";
import Card from "./card/Card";
import TextContent from "./textContent/TextContent";
import "./Login.css";
import SideCar from "../../Components/SideCar/SideCar";

const Login = () => {
	return ( 
		<div className="login"  >
			<TextContent ></TextContent>
			<Card></Card>
		</div>
	);
};
 
export default Login;