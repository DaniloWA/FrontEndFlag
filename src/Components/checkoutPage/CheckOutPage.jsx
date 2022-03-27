import React from "react";
import FeeDelivery from "./FeeDelivery";

const CheckOutPage = () => {
	return (
		<div>
			<h1>Checkout</h1>

			<FeeDelivery title="Store Delivery" price="Grátis" />
			<FeeDelivery title="Home Delivery" price="3,76" />
		</div>
	);
};

export default CheckOutPage;
