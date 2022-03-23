import { getLocal } from "../Middleware/localStorage";
import React, { useState, createContext, useContext, useEffect } from "react";
import fetchAPI from "../Middleware/getApi";

export const PageContext = createContext();

export const pageContextProvider = (props) => {
	const [data, setData] = useState({
		data: getLocal("data") || [],
		user: getLocal("user") || [],
		car: getLocal("car") || [],
	});

	useEffect(() => {
		const userStorage = getLocal("user");
		const dataStorage = getLocal("data");
		const carStorage = getLocal("car");

		if (userStorage) {
			setData({ ...data, user: userStorage });
		} else {
			fetchAPI("user", "/users").then(response => setData({...data, user: response}));
		}

		if (dataStorage) {
			setData({ ...data, data: dataStorage });
		} else {
			fetchAPI("data", "/products").then(response => setData({...data, data: response}));
		}

		if (carStorage) {
			setData({ ...data, car: carStorage });
		} else {
			fetchAPI("car","/carts").then(response => setData({...data, car: response}));
		}
		
	}, []);

	return (
		<PageContext.Provider
			value={{
				data: data.data,
				user: data.user,
				car: data.car,
				setData,
			}}
		>
			{props.children}
		</PageContext.Provider>
	);
};

export const useData = () => useContext(PageContext);

export default pageContextProvider;
