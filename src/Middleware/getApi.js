import { setLocal } from "./localStorage";

function fetchFakeAPI(nome,url){
	fetch(url)
		.then(res=>res.json())
		.then(json=>JSON.stringify(json))
		.then(json=>setLocal(nome,json));
}

export default fetchFakeAPI;