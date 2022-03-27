import React, { useEffect } from "react";
import "./App.css";
import PageContextProvider from "./Services/pageContextProvider";
import { Routes, Route } from "react-router-dom";
import NotFound from "../src/Pages/notFound/NotFound";
import Login from "./Pages/login/Login";
import NavBar from "./Layouts/navbar/NavBar";
import Products from "./Pages/products/Products";
import Footer from "./Layouts/footer/Footer";
import fetchAPI from "./Middleware/getApi";
import DataClient from "./Components/checkoutPage/DataClient";
//import FeeDelivery from "./Components/checkoutPage/FeeDelivery";
import CheckOutPage from "./Components/checkoutPage/CheckOutPage";

const App = () => {
	useEffect(() => {
		fetchAPI("data", "/products"),
		fetchAPI("user", "/users"),
		fetchAPI("car", "/carts");
	}, []);

	return (
		<div className="App">
			{
				<PageContextProvider>
					<DataClient></DataClient>
					<Routes>
						<Route path="/checkOutPage" element={<CheckOutPage/>}/>				
						<Route path="/navbar" element={<NavBar />} />
						<Route path="/products" element={<Products />} />
						<Route path="*" element={<NotFound />} />
						<Route path="/login" element={<Login />} />
					</Routes>
					<Footer></Footer>
				</PageContextProvider>
			}
		</div>
	);
};

export default App;
