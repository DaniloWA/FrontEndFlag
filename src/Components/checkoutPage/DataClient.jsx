import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DataClient = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [countryCode, setCountryCode] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");

	function handleData(e) {
		e.preventDefault();
	}

	const navigate = useNavigate();

	function handleClickFoward() {
		navigate("/addressClient");		 
	}

	function handleClickBack() {
		navigate(-1);		 
	}

	return (
		<>
			<div>
				<span>1</span>
				<p>User</p>
			</div>
			<div>
				<form onSubmit={handleData}>
					<input
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
						placeholder="First name"
						type="text"
						name="firstName"
						required
					/>
					<input
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
						placeholder="Last name"
						type="text"
						name="lastName"
						required
					/>
					<input
						value={countryCode}
						onChange={(e) => setCountryCode(e.target.value)}
						type="text"
						name="Country code"
						required
					/>
					<input
						value={phoneNumber}
						onChange={(e) => setPhoneNumber(e.target.value)}
						type="text"
						name="phoneNumber"
						required
					/>
					<input type="checkbox" />
					<span>
            Yes, I would like to subscribe to a Fashion News. I authorizes For
            you to to handle my personal data to send me the news latter,
            accordding to Terms and Conditions from For You.
					</span>
					<button type="submit" onClick={handleClickFoward}>Done</button>
					<button type="submit" onClick={handleClickBack}>Back</button>
				</form>
			</div>
		</>
	);
};

export default DataClient;
