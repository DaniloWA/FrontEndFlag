import React, {useState} from "react";

const DataClient = () => {

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [birthday, setBirthday] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");

	function handleData(e){
		e.preventDefault();
	}

	return (
		<>
			<div>
		
				<form onSubmit={handleData}>
					<input
						value={firstName}
						onChange={e => setFirstName(e.target.value)}
						placeholder="First name"
						type="text"
						name="firstName"
						required
					/>
					<input
						value={lastName}
						onChange={e => setLastName(e.target.value)}
						placeholder="Last name"
						type="text"
						name="lastName"
						required
					/>
					<input
						value={birthday}
						onChange={e => setBirthday(e.target.value)}
						type="date"
						name="birthday"
						required
					/><span>DD-MM-AAAA</span>
					<select>
						<option value="Brasill">Brasil (+55)</option>
						<option value="Portugal">Portugal (+351)</option>
					</select>
					<input
						value={phoneNumber}
						onChange={e => setPhoneNumber(e.target.value)}
						type="date"
						name="phoneNumber"
						required
					/>
					<input type="checkbox"/><span>Yes, I would like to subscribe to a Fashion News. I authorizes For you to to handle my personal data to send me the news latter, accordding to Terms and Conditions from For You.</span>
					<button type="submit">Done</button>
					<button type="submit">Back</button>
				</form>
				
				<aside>
					<span>Resumo da compra</span>
				</aside>
			</div>
		</>
	);
};

export default DataClient;
