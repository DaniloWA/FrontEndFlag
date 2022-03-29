import { getLocal } from "../Middleware/sessionStorage";
import React, { useState, createContext, useContext, useEffect } from "react";
import fetchAPI from "../Middleware/getApi";

export const PageContext = createContext();



export const pageContextProvider = (props) => {
	const [data, setData] = useState({
		data: getLocal("data") || [],
		car: getLocal("car") || [],
	});
	const [user, setUser] = useState({
		currentUser: getLocal("user") || "anonymous"
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

		if (dataStorage) {
			setData({ ...data, data: dataStorage });
		} else {
			fetchAPI("data", "/products").then((response) =>
				setData({ ...data, data: response })
			);
		}

		if (carStorage) {
			setData({ ...data, car: carStorage });
		} else {
			fetchAPI("car", "/carts").then((response) =>
				setData({ ...data, car: response })
			);
		}
	}, []);

	return (
		<PageContext.Provider
			value={{
				data: data.data,
				car: data.car,
				user: user,
				setUser
			}}
		>
			{props.children}
		</PageContext.Provider>
	);
};

export const useData = () => useContext(PageContext);

export default pageContextProvider;
