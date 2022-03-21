
export function setLocal(nome,data){
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
		console.log("Start Data update - IA");
		localStorage.setItem("data",data);
		console.log("Finish Data update - IA");
		break;
	case "car":
		console.log("Start Car update - IA");
		localStorage.setItem("car",data);
		console.log("Finish Carrinho update - IA");
		break;
	case "user":
		console.log("Start User update - IA");
		localStorage.setItem("user",data);
		console.log("Finish User update - IA");
		break;
	}	
}
		
