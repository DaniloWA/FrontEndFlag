import { setLocal, getLocal } from "./localStorage";

function fetchAPI(nome,url){
	fetch(url)
		.then(res=>checkErrorStatus(res))
		.then(json=>JSON.stringify(json))
		.then(json=>setLocal(nome,json))
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



export default fetchAPI;