import { getLocal, setLocal } from "../Middleware/sessionStorage";
import React, { useState, createContext, useContext, useEffect } from "react";
import fetchAPI from "../Middleware/getApi";

export const PageContext = createContext();



export const pageContextProvider = (props) => {
	const [data, setData] = useState({
		data: getLocal("data") || [],
		car: getLocal("car") || [],
	});
	const [user, setUser] = useState({
		name: "anonymous"
	});

	useEffect(() => {
		const userStorage = getLocal("user");
		const dataStorage = getLocal("data");
		const carStorage = getLocal("car");

		if (userStorage && userStorage != "anonymous") {
			setUser({name: userStorage});
		} else {
			console.log("User Não Existe");
			console.log(user);
			setUser({name: "anonymous"});
			setLocal("user","anonymous");
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
