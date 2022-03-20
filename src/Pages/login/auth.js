 

export const initialParam = {
	username: "",
	password: "",
	loading: true,
};

const Auth = async() => {
   
	fetch("https://fakestoreapi.com/auth/login",{
		method:"POST",
		body:JSON.stringify({
			username: "mor_2314",
			password: "83r5^_"
		})
	})
		.then(res=>res.json())
		.then(json=>console.log(json));
};
 
export default Auth;



