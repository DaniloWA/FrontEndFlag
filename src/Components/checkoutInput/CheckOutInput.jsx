/* eslint-disable react/prop-types */
import React from "react";
import "../../Pages/checkoutPage/CheckOutPage.css";

const CheckOutInput = ({ value, setInput, placeholder, type, name}) => {
	return <input required value={value} onChange={setInput} placeholder={placeholder} type={type} name={name} className="CheckOutInput" autoComplete="off"/>;
};

export default CheckOutInput;
