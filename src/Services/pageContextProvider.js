import { getLocal } from "../Middleware/sessionStorage";
import React, { useState, createContext, useContext, useEffect } from "react";
import fetchAPI from "../Middleware/getApi";
import { setLocal } from "../Middleware/sessionStorage";

export const PageContext = createContext();

export const pageContextProvider = (props) => {
	const [data, setData] = useState({
		data: getLocal("data") || [],
	});

	const [car, setCar] = useState({
		carUser: getLocal("user") || "anonymous",
		carrinho:  [{produtoid: 1 , price:249 , title: "Bla bla bla bla" ,image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}]
	});

	// eslint-disable-next-line no-unused-vars
	function cartAdditem (e){
		if(getLocal("car")){
			console.log("aaa");
		}else if(car.carrinho != null){
			console.log("aaa");
		}else{
			console.log("aaa");
		}
			
		setCar({...car, carrinho: null});
		setLocal("car", car.carrinho);
	}
	const [user, setUser] = useState({
		currentUser: getLocal("user") || "anonymous",
		userlogged: getLocal("user") != "anonymous" && getLocal("user") != undefined ? true : false
	});

	useEffect(() => {
		const userStorage = getLocal("user");
		const dataStorage = getLocal("data");
		const carStorage = getLocal("car");

		if (userStorage && userStorage != "anonymous") {
			console.log("User Logado - Provider");
			setUser({currentUser: userStorage});
		} else {
			console.log("User Não Existe - Provider");
			setUser({currentUser: {name:"anonymous"}});
		}

		if (carStorage && carStorage.carUser != "anonymous") {
			console.log("Carrinho do user em Cache! - Provider");
			setCar({...car, carrinho: carStorage});
		} else {
			console.log("User Não tem Item no carrinho - Provider");
			setCar({...car, carrinho: null});
		}

		if (dataStorage) {
			console.log("Data está atualizado - Provider");
			setData({ ...data, data: dataStorage });
		} else {
			console.log("Data desatualizado - Provider");
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
				cartAdditem,
				setUser
			}}
		>
			{props.children}
		</PageContext.Provider>
	);
};

export const useData = () => useContext(PageContext);

export default pageContextProvider;
