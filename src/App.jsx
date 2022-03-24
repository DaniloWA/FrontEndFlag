import React, { useEffect } from "react";
import "./App.css"; 
import fetchAPI from "./Middleware/getApi";
import PageContextProvider from "./Services/pageContextProvider";
import { Routes, Route } from "react-router-dom";
import NotFound from "../src/Pages/notFound/NotFound";
import Login from "./Pages/login/Login";
import NavBar from "./Layouts/navbar/NavBar";
import Products from "./Pages/products/Products";
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
					<Route path="/navbar" element={<NavBar/>} />		
					<Route path="*" element={<NotFound />} />
					<Route path="/products" element={<Products />} />
				</Routes>
				
				<Footer></Footer>
			</PageContextProvider>
		</div>
	);
};

export default App;
