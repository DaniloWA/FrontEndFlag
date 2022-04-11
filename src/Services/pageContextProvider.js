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
		products:  getLocal("user") || null
	});

	const [user, setUser] = useState({
		currentUser: getLocal("user") || "anownymous",
		userlogged: getLocal("user") != "anonymous" && getLocal("user") != undefined ? true : false
	});

	function cartAddItem (e){
		let prodctsnew = [];
		const newProdutc = {...e, quantidade: 1};
	
		if(getLocal("car")){
			console.log("aaa");
		}else if(car.products != null){
			let cart = [...car.products];
			if(!cart.find(product => product.productId === newProdutc.productId)){
				prodctsnew = [...car.products , newProdutc];
			}
			else{
				let newQuanti = cart.find(product => product.productId === newProdutc.productId);
				let newCart = cart.filter(product => product.productId != newQuanti.productId);
				prodctsnew = [...newCart, {...newQuanti, quantidade: newQuanti.quantidade + 1}].sort((a,b) => a-b);
			}
				
		}else{
			prodctsnew = [newProdutc];
		}
		
		let sortArray = prodctsnew.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));

		if(user.userlogged)
			setCar({...car, products: sortArray});
		if(!user.userlogged)
			setCar({...car, products: null});
	}

	function addQuant(e){
		let prodctsnew = [];

		if(car.products != null){
			let cart = [...car.products];
			let newQuanti = cart.find(product => product.productId === e);
			let newCart = cart.filter(product => product.productId != e);
			prodctsnew = [...newCart, {...newQuanti, quantidade: newQuanti.quantidade + 1}];		
		}
		let sortArray = prodctsnew.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));

		if(user.userlogged)
			setCar({...car, products: sortArray});
		if(!user.userlogged)
			setCar({...car, products: null});
	}
	
	function addNumQuant (e,numberInput){
		let prodctsnew = [];
		let num = Number(numberInput) == 0 ? 1 : Number(numberInput);
		const newProdutc = {...e, quantidade: num};
		
		if(car.products != null){
			let cart = [...car.products];

			if(!cart.find(product => product.productId === newProdutc.productId)){
				prodctsnew = [...car.products , newProdutc];
			}else{
				let newQuanti = cart.find(product => product.productId === newProdutc.productId);
				let newCart = cart.filter(product => product.productId != newQuanti.productId);
				prodctsnew = [...newCart, {...newQuanti, quantidade: newQuanti.quantidade + num}].sort((a,b) => a-b);
				console.log(prodctsnew[0]);
			}
				
		}else{
			prodctsnew = [newProdutc];
		}
		
		let sortArray = prodctsnew.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));

		if(user.userlogged)
			setCar({...car, products: sortArray});
		if(!user.userlogged)
			setCar({...car, products: null});
	}

	function subQuant(e){
		let prodctsnew = [];

		if(car.products != null){
			let cart = [...car.products];
			let newQuanti = cart.find(product => product.productId === e);
			let newCart = cart.filter(product => product.productId != e);
			if(newQuanti.quantidade == 1){
				prodctsnew = [...newCart];
			}else{
				prodctsnew = [...newCart, {...newQuanti, quantidade: newQuanti.quantidade - 1}];		
			}	
		}
		let sortArray = prodctsnew.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
		
		if(user.userlogged)
			setCar({...car, products: sortArray});
		if(!user.userlogged)
			setCar({...car, products: null});
	}

	useEffect(() => {
		const userStorage = getLocal("user");
		const dataStorage = getLocal("data");
		const carStorage = getLocal("car")  ;

		if (userStorage && userStorage != "anonymous") {
			console.log("User Logado - Provider");
			setUser({userlogged: true, currentUser: userStorage});
		} else {
			console.log("User Não Existe - Provider");
			setUser({userlogged: false, currentUser: {name:"anonymous"}});
		}

		if (carStorage && carStorage.carUser != "anonymous") {
			console.log("Carrinho do user em Cache! - Provider");
			setCar({...car, products: carStorage});
		} else {
			console.log("User Não tem Item no carrinho - Provider");
			setCar({...car, products: null});
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
				cartAddItem,
				addQuant,
				addNumQuant,
				subQuant,
				setUser
			}}
		>
			{props.children}
		</PageContext.Provider>
	);
};

export const useData = () => useContext(PageContext);

export default pageContextProvider;
