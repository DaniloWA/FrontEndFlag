/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../Assets/Images/loja-de-roupas.png";


const Logo = () => {
	const Navegar = useNavigate();
	return (
		<img src={logo} alt="Logo" onClick={() => Navegar("/inicio")} />
	);
};

export default Logo;
