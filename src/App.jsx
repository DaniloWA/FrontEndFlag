/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import PageContextProvider, { useData } from "./Services/pageContextProvider";
import { Routes, Route } from "react-router-dom";
import Layouts from "./Layouts/index";
import fetchAPI from "./Middleware/getApi";
import Pages from "./Pages/index";
import routes from "./Routes/routes";
import "./App.css";
import { getLocal, setLocal } from "./Middleware/sessionStorage";

const App = () => {


	useEffect(() => {
		fetchAPI("car", "/carts");
		fetchAPI("data", "/products");
		if(!getLocal("user")){
			setLocal("user", "anonymous");
		}
	}, []);
	return (
		<div className="App">
			{
				<PageContextProvider>
					<Routes>				
						<Route path={routes.inicio} element={<Pages.Inicio />} />
						<Route path={routes.cliente} element={<Pages.Cliente />} />
						<Route path={routes.produtos} element={<Pages.Products />} />
						<Route path={routes.login} element={<Pages.Login/>} />
						<Route path={routes.notfound} element={<Pages.NotFound />} />
					</Routes>
					<Layouts.Footer/> 
				</PageContextProvider>
			}
		</div>
	);
};

export default App;
