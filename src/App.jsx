/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import PageContextProvider from "./Services/pageContextProvider";
import { Routes, Route } from "react-router-dom";
import Layouts from "./Layouts/index";
import fetchAPI from "./Middleware/getApi";
import Pages from "./Pages/index";
import routes from "./Routes/routes";
import "./App.css";
import CheckOutPage from "./Pages/checkoutPage/CheckOutPage";

const App = () => {
	useEffect(() => {
		fetchAPI("data", "/products");
	}, []);
	
	return (
		<div className="App">
			{
				<PageContextProvider>
					<Layouts.NavBar />
					<Routes>
						<Route path={routes.login} element={<Pages.Login />} />
						<Route path={routes.inicio} element={<Pages.Inicio />} />
						<Route path={routes.cliente} element={<Pages.Cliente />} />
						<Route path={routes.produtos} element={<Pages.Products />} />
						<Route path={routes.checkoutpage} element={<CheckOutPage />} />
						<Route path={routes.notfound} element={<Pages.NotFound />} />
						<Route path={routes.carrinho} element={<Pages.Carrinho />} />
						<Route
							path={routes.checkoutpage}
							element={<Pages.CheckOutPage />}
						/>
						<Route path={"/produto/:id"} element={<Pages.ProdutoPage />} />
					</Routes>
					<Layouts.Footer />
				</PageContextProvider>
			}
		</div>
	);
};

export default App;
