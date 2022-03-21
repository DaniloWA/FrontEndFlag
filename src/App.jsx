import React, { useEffect } from "react";
import Login from "./Pages/login/Login";
import "./App.css"; 
import todosProtudos from "./Middleware/getApi";
import PageContextProvider from "./Services/pageContextProvider";



const App = () => {   
	useEffect(() => {
		todosProtudos();
	},[]);

	return ( 
		<div className="App">
			<PageContextProvider>
				<Login></Login>
			</PageContextProvider>
		</div>
		
	);
};
 
export default App;