export function setLocal(nome, data) {
	if (nome == "ferrou") {
		return console.log(
			"Apocalipse! API deu Erro e sessionStorage '" + data + "' Vazio! Panic!!!"
		);
	}
	if(typeof data == "string" ){
		if (data === getLocal(nome)) {
			console.log("Base de Dados: #STRING# '" + nome + "' está Atualizada!!!");
		} else {
			console.log("Atualizando Base de Dados: " + nome + " ...");
			localSetIA(nome, data);
		}
	}else{
		if (data === JSON.stringify(getLocal(nome))) {
			console.log("Base de Dados: '" + nome + "' está Atualizada!!!");
		} else {
			console.log("Atualizando Base de Dados: " + nome + " ...");
			localSetIA(nome, data);
		}
	}
	
}

export function getLocal(data) {
	let database = sessionStorage.getItem(data);

	if(typeof database == "string"){
		return database;
	}
	return JSON.parse(database);
}

export function clearLocal(local) {
	sessionStorage.removeItem(local);
}

export function localSetIA(nome, data) {
	switch (nome) {
	case "data":
		sessionStorage.setItem("data", data);
		console.log("Data Atualizado! - IA");
		break;
	case "car":
		sessionStorage.setItem("car", data);
		console.log("Car Atualizado! - IA");
		break;
	case "user":
		sessionStorage.setItem("user", data);
		console.log("User Atualizado! - IA");
		break;
	
	case "teste":
		sessionStorage.setItem("teste", data);
		console.log("Teste Atualizado! - IA");
		break;
	}
}
