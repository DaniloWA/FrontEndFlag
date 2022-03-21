import { useContext } from "react";
import { PageContext } from "../../Services/pageContextProvider";
 

const auth = (login,pass) =>{
	if(authLogin(login) && authPass(pass)){
		return true;
	}else {
		return false;
	}
};

const authLogin = (login) => {
	const {user} = useContext(PageContext);
	const response = filterUser(user,login);
	return response;
};

const authPass = (login) => {
	const {user} = useContext(PageContext);
	const response = filterUser(user,login);
	return response;
};


// eslint-disable-next-line no-unused-vars
function filterUser(data,login = "kevin@gmail.com",pass){
	const auth = data.filter(info => {
		return info.email === login;
	});
	if(auth.length === 0){
		console.log(auth,"Usuario não existe");
		return false;
	}else{
		return true;
	}
}
 
export default auth;