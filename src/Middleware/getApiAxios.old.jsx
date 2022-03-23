import axios from "axios";
import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { setLocal, getLocal} from "./localStorage";
import api from "../Services/api";

export function fetchAPI(nome,url){
	api.get(url).then(({data}) => {
		setLocal(nome,data);
		return data;
	}).catch((error) => {
		if(!getLocal(nome)){
			setLocal("ferrou",nome);
		}
		console.log("API morreu! Da uma olhada no erro: " + error.message);
	});
}

export async function  useAxios(url){
	const response = await api.get(url); 
	console.log(response);
	return response;
}

// eslint-disable-next-line no-unused-vars
function checkErrorStatus(response) {
	if (response.status >= 200 && response.status <= 299) {
		return response.json();
	} else {
		console.log("API status code error: " + response.status);
		throw Error(response.statusText);
	}
}


export function fetchApiIA(nome){
	let data = [];
	switch (nome) {
	case "data":
		fetch("https://fakestoreapi.com/products")
			.then(res=>res.json())
			.then(json=>JSON.stringify(json))
			.then(json=>data = json);
		console.log(data);
		return data;
	case "car":
		fetch("https://fakestoreapi.com/users")
			.then(res=>res.json())
			.then(json=>JSON.stringify(json))
			.then(json=>data = json);
		console.log(data);
		return data;
	case "user":
		fetch("https://fakestoreapi.com/carts")
			.then(res=>res.json())
			.then(json=>JSON.stringify(json))
			.then(json=>data = json);
		console.log(data);
		return data;
	}
}

const useFetch = () => {
	// eslint-disable-next-line no-unused-vars
	const [repositorio, setRepositorio] = useState();
	//const [loading, setLoading] = useState(true);

	useEffect(() => {
		api.get("/products").then(({data}) => {
			setRepositorio(data);
		});
		console.log(repositorio);

	},[]); 

	// eslint-disable-next-line no-unused-vars
	const  fetchData = () => {
		return axios.get("https://fakestoreapi.com/products")
			.then((response) => setLocal("teste", response.data));

	};
 
	console.log(repositorio);
	return ( 
		<>
			<h1>teste</h1>
			<ul>
				{repositorio != undefined ? repositorio.map(data => ((
					<li key={data.id}>{data.id} || {data.price} || {data.title} </li>
				) 
				)) : <h1> Carregando ...</h1>  }
				
			</ul>
		</>
	);
};
 
export default useFetch;

/*
    import { setLocal, getLocal } from "./localStorage";

async function fetchAPI(nome,url){
	localStorage.setItem("loading", true);
	fetch(url)
		.then(res=>checkErrorStatus(res))
		.then(json=>JSON.stringify(json))
		.then(json=>setLocal(nome,json))
		.then(localStorage.setItem("loading", false))
		.catch((error) => {
			if(!getLocal(nome)){
				setLocal("ferrou",nome);
			}
			console.log("API morreu! Da uma olhada no erro: " + error.message);
		});
}

function checkErrorStatus(response) {
	if (response.status >= 200 && response.status <= 299) {
		return response.json();
	} else {
		console.log("API status code error: " + response.status);
		throw Error(response.statusText);
	}
}


export function fetchApiIA(nome){
	let data = [];
	switch (nome) {
	case "data":
		fetch("https://fakestoreapi.com/products")
			.then(res=>res.json())
			.then(json=>JSON.stringify(json))
			.then(json=>data = json);
		console.log(data);
		return data;
	case "car":
		fetch("https://fakestoreapi.com/users")
			.then(res=>res.json())
			.then(json=>JSON.stringify(json))
			.then(json=>data = json);
		console.log(data);
		return data;
	case "user":
		fetch("https://fakestoreapi.com/carts")
			.then(res=>res.json())
			.then(json=>JSON.stringify(json))
			.then(json=>data = json);
		console.log(data);
		return data;
	}
}


export default fetchAPI;


















	{!loading ? repositorio != undefined ? repositorio.map(data => {(
					<li key={data.id}>{data.title}, {data.price}</li>
				);
				}) : <h1> Carregando ...</h1> : <h1> Carregando ...</h1>}




                					<li key={item.id}>{item.title},teste {item.price}</li>,
					console.log(item.id)

*/