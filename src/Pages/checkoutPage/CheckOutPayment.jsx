import React from "react";
import EditPagamento from "../../Components/editPagamento/EditPagamento";
import { useNavigate } from "react-router-dom";


const CheckOutPayment = () => {

	const navigate = useNavigate();

	function handleGoBack() {
		navigate(-1);
	}

	function handleDoneMessage() {
		alert("Your purchase is succefully done, thank you :D");
	}

	return ( 
		<div className="CheckOutPayment">
			<h1>Payment method</h1>
			<EditPagamento />
			<div className="CheckOut_button">
				<button type="submit" onClick={() => handleDoneMessage()}>Done</button>
				<button type="submit" onClick={() => handleGoBack()}>Back</button>
			</div>
		</div>
	);
};
 
export default CheckOutPayment;