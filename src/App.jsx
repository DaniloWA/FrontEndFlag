import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NotFound from "../src/Pages/notFound/NotFound";

const App = () => {
	return (
		<div className="App">
			<Routes>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
};

export default App;
