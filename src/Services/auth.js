export const auth = (user,login ,pass ) =>{ 
	if(authLogin(user,login) && authPass(user,pass)){
		return true;
	}else{
		return false;
	}
};


export const authLogin = (user,login) => {

	const response = user.filter(user => {
		if(user.email === login || user.username === login){
			return user; 
		}
	});

	if(response.length == 0){
		return false;
	} else{
		return true;
	}
};

export const authPass = (user,pass) => {
    
	const response = user.filter(user => {
		if(user.password === pass){
			return user; 
		}
	});

	if(response.length == 0){
		return false;
	} else{
		return true;
	}
};