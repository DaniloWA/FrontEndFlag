import React, { useContext } from "react";
import Card from "./card/Card";
import TextContent from "./textContent/TextContent";
import "./Login.css";
import { PageContext } from "../../Services/pageContextProvider";
 

const Login = () => {
	const {data} = useContext(PageContext);
	return ( 
		<div className="login"  >
			<TextContent  ></TextContent>
			<Card login={data} setLogin={data}> </Card>
		</div>
	);
};
 
export default Login;