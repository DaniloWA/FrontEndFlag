import { useContext } from "react";
import { PageContext } from "../../Services/pageContextProvider";
 

const auth = (login ,pass ) =>{
	const {user} = useContext(PageContext);
	console.log(user[0]);
	if(authLogin(user,login) && authPass(user,pass)){
		return true;
	}else{
		return false;
	}
};


const authLogin = (user,login) => {

	const response = user.filter(user => {
		if(user.email === login || user.username === login){
			return user; 
		}
	});

	if(response.length == 0){
		console.log("User or email invalido");
		return false;
	} else{
		return true;
	}
};

const authPass = (user,pass) => {
    
	const response = user.filter(user => {
		if(user.password === pass){
			return user; 
		}
	});

	if(response.length == 0){
		console.log("Senha errada!");
		return false;
	} else{
		return true;
	}
};

export default auth;
