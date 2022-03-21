import React from "react";
import Card from "./card/Card";
import TextContent from "./textContent/TextContent";
import "./Login.css";
 

const Login = () => {
	return ( 
		<div className="login"  >
			<TextContent ></TextContent>
			<Card> </Card>
		</div>
	);
};
 
export default Login;