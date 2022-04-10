/* eslint-disable react/prop-types */
import React, { useState } from "react";

const CheckOutDelivery = () => {
	const [selectedInput, setSelectedInput] = useState();

	function onChangeValue(e) {
		setSelectedInput(e.target.value);
	}

	return (
		<div onChange={onChangeValue} className="CheckOutDelivery">
			<h1>Delivery</h1>
			<div className="CheckOutDeliveryInputHome">
				<input type="radio" name="picked" value={selectedInput} />{" "}
				<label> At your Home</label>
				
			</div>
			<div className="CheckOutDeliveryInputStore">
				<input type="radio" name="picked" />
				<label> Pick up at the Store</label>
			</div>
		</div>
	);
};

export default CheckOutDelivery;
