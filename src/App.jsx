
import React, { useEffect } from "react";
import "./App.css"; 
import fetchFakeAPI from "./Middleware/getApi";
import PageContextProvider from "./Services/pageContextProvider";
import { Routes, Route } from "react-router-dom";
import NotFound from "../src/Pages/NotFound/NotFound";
import Login from "./Pages/login/Login";


const App = () => {   
	useEffect(() => {
		fetchFakeAPI("data","https://fakestoreapi.com/products");
		fetchFakeAPI("user","https://fakestoreapi.com/users");
		fetchFakeAPI("car","https://fakestoreapi.com/carts");
	},[]);

	return ( 
		<div className="App">
			<PageContextProvider>
				<Routes>
					<Route path="/login" element={<Login/>} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</PageContextProvider>
		</div>
	);
};

export default App;
