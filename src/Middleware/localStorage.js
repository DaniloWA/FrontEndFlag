
export function setLocal(data){
	if(data === JSON.stringify(getLocal("data"))){
		console.log("Base de Dados está Atualizada");
	}else{
		console.log("Atualizando Base de Dados...");
		localStorage.setItem("data",data);
	}
}

export function getLocal(data){
	let database = localStorage.getItem(data);
	return JSON.parse(database);
}

export function clearLocal(local){
	localStorage.removeItem(local);
}
