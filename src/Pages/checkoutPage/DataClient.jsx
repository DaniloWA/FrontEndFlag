import React, { useState } from "react";
import CheckOutInput from "../../Components/checkoutInput/CheckOutInput";
import "./CheckOutPage.css";

const DataClient = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");

	function handleData(e) {
		e.preventDefault();
	}

	return (
		<div className="DataClient_Title">
			<h1>Your data</h1>
			<form onSubmit={handleData} className="DataClient">
				<CheckOutInput
					value={firstName}
					setInput={(e)=> setFirstName(e.target.value)}
					placeholder="First name"
					type="text"
					name="firstName"
				/>
				<CheckOutInput
					value={lastName}
					setInput={(e)=> setLastName(e.target.value)}
					placeholder="Last name"
					type="text"
					name="lastName"
				/>
			
				<select className="DataClient_select">
					<option value="Brasill">Brasil (+55)</option>
					<option value="Portugal">Portugal (+351)</option>
				</select>
				<CheckOutInput
					value={phoneNumber}
					setInput={(e)=> setPhoneNumber(e.target.value)}
					type="text"
					name="phoneNumber"
					placeholder="Phone Number"
				/>
				<div className="DataClient_checkbox">
					<input type="checkbox" />
					<span>
            Yes, I would like to subscribe to a Fashion News. I authorizes DSM to to handle my personal data to send me the news latter,
            accordding to Terms and Conditions from DSM.
					</span>
				</div>
			</form>
		</div>
	);
};

export default DataClient;
