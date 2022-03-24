export async function authLoginNew(userName,pass){
	console.log(userName,pass);
	const response = await fetch(`https://edit-shop-api.herokuapp.com/api/login?username=${userName}&password=${pass}`);
	const user = response.json();
	return user;
}

// eslint-disable-next-line no-unused-vars
function checkErrorStatus(response) {
	if (response.status >= 200 && response.status <= 299) {
		return response.json();
	} else {
		console.log("API status code error: " + response.status);
		return response.status;
	}
}