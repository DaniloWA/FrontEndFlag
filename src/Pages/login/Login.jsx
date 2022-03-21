import React, { useContext } from "react";
import Card from "./card/Card";
import TextContent from "./textContent/TextContent";
import "./Login.css";
import { PageContext } from "../../Services/pageContextProvider";
import auth from "./auth";
 

const Login = () => {
	const {user} = useContext(PageContext);
	console.log(auth());
 
	return ( 
		<div className="login"  >
			<TextContent ></TextContent>
			<Card login={user} setLogin={user}> </Card>
		</div>
	);
};
 
export default Login;