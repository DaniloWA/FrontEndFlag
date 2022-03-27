import React, {useState} from "react";

const AddressClient = () => {

	const [street, setStreet] = useState("");
	const [moreInfo, setMoreInfo] = useState("");
	const [city, setCity] = useState("");
	const [postalCode, setPostalCode] = useState("");
	
	function handleData(e){
		e.preventDefault();
	}

	return ( <>
		<div>
			<form onSubmit={handleData}>
				<input
					value={street}
					onChange={e => setStreet(e.target.value)}
					placeholder="Street"
					type="text"
					name="Street"
					required
				/>
				<input
					value={moreInfo}
					onChange={e => setMoreInfo(e.target.value)}
					placeholder="More informations (optional)"
					type="text"
					name="Street"
					required
				/>
				<input
					value={city}
					onChange={e => setCity(e.target.value)}
					placeholder="City/Town"
					type="text"
					name="City/Town"
					required 
				/>
				<input
					value={street}
					onChange={e => setStreet(e.target.value)}
					placeholder="Street"
					type="text"
					name="Street"
					required
				/>
			</form>
		</div>
	</> );
};
 
export default AddressClient;