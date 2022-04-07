import { getLocal } from "../Middleware/sessionStorage";
import React, { useState, createContext, useContext, useEffect } from "react";
import fetchAPI from "../Middleware/getApi";

export const PageContext = createContext();

export const pageContextProvider = (props) => {
	const [data, setData] = useState({
		data: getLocal("data") || [],
	});

	const [car, setCar] = useState({
		carUser: getLocal("user") || "anonymous",
		carrinho: getLocal("car") || null
	});
	const [user, setUser] = useState({
		currentUser: getLocal("user") || "anonymous",
		userlogged: getLocal("user") != "anonymous" && getLocal("user") != undefined ? true : false
	});

	useEffect(() => {
		const userStorage = getLocal("user");
		const dataStorage = getLocal("data");
		const carStorage = getLocal("car");

		if (userStorage && userStorage != "anonymous") {
			console.log("User Logado");
			setUser({currentUser: userStorage});
		} else {
			console.log("User Não Existe");
			setUser({currentUser: {name:"anonymous"}});
		}

		
		if (carStorage && carStorage.carUser != "anonymous") {
			console.log("Carrinho do user em Cache!");
			setCar({...car, carrinho: carStorage});
		} else {
			console.log("User Não tem Item no carrinho");
			setCar({...car, carrinho: null});
		}

		if (dataStorage) {
			setData({ ...data, data: dataStorage });
		} else {
			fetchAPI("data", "/products").then((response) =>
				setData({ ...data, data: response })
			);
		}

	}, []);

	return (
		<PageContext.Provider
			value={{
				data: data.data,
				car: car,
				user: user,
				setCar,
				setUser
			}}
		>
			{props.children}
		</PageContext.Provider>
	);
};

export const useData = () => useContext(PageContext);

export default pageContextProvider;
