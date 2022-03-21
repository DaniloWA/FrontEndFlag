
import React, { useEffect } from "react";
import "./App.css"; 
import fetchAPI from "./Middleware/getApi";
import PageContextProvider from "./Services/pageContextProvider";
import { Routes, Route } from "react-router-dom";
import NotFound from "../src/Pages/NotFound/NotFound";
import Login from "./Pages/login/Login";
import Footer from "./Layouts/footer/Footer";


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
					<Route path="*" element={<NotFound />} />
				</Routes>
				<Footer></Footer>
			</PageContextProvider>
		</div>
	);
};

export default App;
