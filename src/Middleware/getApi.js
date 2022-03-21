import { setLocal } from "./localStorage";
function todosProtudos(){
	fetch("https://fakestoreapi.com/products")
		.then(res=>res.json())
		.then(json=>JSON.stringify(json))
		.then(json=>setLocal(json));
}

export default todosProtudos;