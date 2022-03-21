
import React, { useEffect } from "react";
import "./App.css"; 
import todosProtudos from "./Middleware/getApi";
import PageContextProvider from "./Services/pageContextProvider";
import { Routes, Route } from "react-router-dom";
import NotFound from "../src/Pages/notFound/NotFound";



const App = () => {   
	useEffect(() => {
		todosProtudos();
	},[]);

	return ( 
		<div className="App">
			<PageContextProvider>
      <Routes>
				<Route path="*" element={<NotFound />} />
			</Routes>
			</PageContextProvider>
		</div>
		

	);
};

export default App;
