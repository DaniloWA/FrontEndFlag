import { setLocal, getLocal } from "./sessionStorage";
import api from "../Services/api";

async function fetchAPI(nome,url){
	const response = await fetch(api.baseURL + url)
		.then(res=>checkErrorStatus(res))
		.then(json=>JSON.stringify(json))
		.then(json=>{
			if(!getLocal(nome)){
				setLocal(nome,json);
			}
			return  JSON.parse(json);
		})
		.catch((error) => {
			if(!getLocal(nome)){
				setLocal("ferrou",nome);
			}
			console.log("API morreu! Da uma olhada no erro: " + error.message);
		});
	return response;
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
		fetch(api.baseURL + "/products" )
			.then(res=>res.json())
			.then(json=>JSON.stringify(json))
			.then(json=>data = json);
		console.log(data);
		return data;
	case "car":
		fetch(api.baseURL + "/users")
			.then(res=>res.json())
			.then(json=>JSON.stringify(json))
			.then(json=>data = json);
		console.log(data);
		return data;
	case "user":
		fetch(api.baseURL + "/carts")
			.then(res=>res.json())
			.then(json=>JSON.stringify(json))
			.then(json=>data = json);
		console.log(data);
		return data;
	}
}


export default fetchAPI;