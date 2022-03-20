import React, { useEffect, useState } from "react";
import Login from "./Pages/login/Login";
import "./App.css"; 

const App = () => {   
	const [num, setNum] = useState(1);
 
	useEffect(() => {
		console.log(num, setNum);
	},[""]);
	return ( 
		<Login></Login>
	);
};
 
export default App;