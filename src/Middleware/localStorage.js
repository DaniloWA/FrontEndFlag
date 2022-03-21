
export function setLocal(nome,data){
	if(nome == "ferrou"){
		return	console.log("Apocalipse! API deu Erro e LocalStorage '"+ data +"' Vazio! Panic!!!");
	}
	if(data === JSON.stringify(getLocal(nome))){
		console.log("Base de Dados: '"+ nome +"' está Atualizada!!!");
	}else{
		console.log("Atualizando Base de Dados: "+ nome +" ...");
		localSetIA(nome,data);
	}
}

export function getLocal(data){
	let database = localStorage.getItem(data);
	return JSON.parse(database);
}

export function clearLocal(local){
	localStorage.removeItem(local);
}

export function localSetIA(nome,data){
	switch(nome){
	case "data":
		localStorage.setItem("data",data);
		console.log("Data Atualizado! - IA");
		break;
	case "car":
		localStorage.setItem("car",data);
		console.log("Car Atualizado! - IA");
		break;
	case "user":
		localStorage.setItem("user",data);
		console.log("User Atualizado! - IA");
		break;
	}	
}
		
