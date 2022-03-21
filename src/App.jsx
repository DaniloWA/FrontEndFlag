import React, { useEffect } from "react";
import "./App.css"; 
import fetchAPI from "./Middleware/getApi";
import PageContextProvider from "./Services/pageContextProvider";
import { Routes, Route } from "react-router-dom";
import NotFound from "../src/Pages/notFound/NotFound";
import Login from "./Pages/login/Login";
import NavBar from "./Layouts/navbar/NavBar";


const App = () => {   
	useEffect(() => {
		fetchAPI("data","https://fakestoreapi.com/products");
		fetchAPI("user","https://fakestoreapi.com/users");
		fetchAPI("car","https://fakestoreapi.com/carts");
	},[]);

	return (
		<div className="App">
			<PageContextProvider>
				<Routes>
					<Route path="/login" element={<Login/>} />
					<Route path="/navbar" element={<NavBar/>} />		
					<Route path="*" element={<NotFound />} />
				</Routes>
			</PageContextProvider>
		</div>
	);
};

export default App;
