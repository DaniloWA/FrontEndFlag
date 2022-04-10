import React, { useState } from "react";
import CheckOutInput from "../../Components/checkoutInput/CheckOutInput";
import "./CheckOutPage.css";

const AddressClient = () => {
	const [street, setStreet] = useState("");
	const [moreInfo, setMoreInfo] = useState("");
	const [city, setCity] = useState("");
	const [postalCode, setPostalCode] = useState("");

	function handleData(e) {
		e.preventDefault();
	}

	return (
		
		<div className="AddressClient_Title">
			<h1>Your Address</h1>
			<form onSubmit={handleData} className="AddressClient">
				<CheckOutInput
					type="text"
					name="Street"
					value={street}
					placeholder="Street"
					setInput={(e) => setStreet(e.target.value)}
				/>
				<CheckOutInput
					type="text"
					value={moreInfo}
					placeholder="More informations (optional)"
					name="Infomation"
					setInput={(e) => setMoreInfo(e.target.value)}
				/>
				<CheckOutInput
					type="text"
					value={city}
					placeholder="City/Town"
					name="City/Town"
					setInput={(e) => setCity(e.target.value)}
				/>
				<CheckOutInput
					type="text"
					value={postalCode}
					placeholder="Postal Code"
					name="PostalCode"
					setInput={(e) => setPostalCode(e.target.value)}
				/>
			</form>
		</div>
	
	);
};

export default AddressClient;
