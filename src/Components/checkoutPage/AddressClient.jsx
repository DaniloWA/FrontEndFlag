import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddressClient = () => {
	const [street, setStreet] = useState("");
	const [moreInfo, setMoreInfo] = useState("");
	const [city, setCity] = useState("");
	const [country, setCountry] = useState("");
	const [postalCode, setPostalCode] = useState("");

	function handleData(e) {
		e.preventDefault();
	}

	const navigate = useNavigate();

	function handleClickFoward() {
		navigate("/fee");		 
	}

	function handleClickBack() {
		navigate(-1);		 
	}

	return (
		<> on
			<div>
				<span>2</span>
				<p>Delivery</p>
			</div>
			<div>
				<form onSubmit={handleData}>
					<input
						value={street}
						onChange={(e) => setStreet(console.log(e.target.value))}
						placeholder="Street"
						type="text"
						name="Street"
						required
					/>
					<input
						value={moreInfo}
						onChange={(e) => setMoreInfo(e.target.value)}
						placeholder="More informations (optional)"
						type="text"
						name="Street"
						required
					/>
					<input
						value={city}
						onChange={(e) => setCity(e.target.value)}
						placeholder="City/Town"
						type="text"
						name="City/Town"
						required
					/>
					<input
						value={postalCode}
						onChange={(e) => setPostalCode(e.target.value)}
						placeholder="Postal Code"
						type="text"
						name="postalCode"
						required
					/>
					<input
						value={country}
						onChange={(e) => setCountry(e.target.value)}
						placeholder="Postal Code"
						type="text"
						name="postalCode"
						required
					/>
					
				</form>
				<button type="submit" onClick={handleClickFoward}>Done</button>
				<button type="submit" onClick={handleClickBack}>Back</button>
			</div>
		</>
	);
};

export default AddressClient;
