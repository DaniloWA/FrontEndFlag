import React, { useState } from "react";
import Card from "./card/Card";
import TextContent from "./textContent/TextContent";
import "./Login.css";
 

import {initialParam} from "./auth";

const Login = () => {
	const [login, setLogin] = useState(initialParam);
     
	return ( 
		<div className="login"  >
			<TextContent  ></TextContent>
			<Card login={login} setLogin={setLogin}> </Card>
		</div>
	);
};
 
export default Login;