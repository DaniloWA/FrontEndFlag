/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router-dom";
import "../../Assets/Styles/NavBar.css";



const Logo = () => {
	const Navegar = useNavigate();
	return (
		<span  onClick={() => Navegar("/inicio")}  className="nome_logo">DMS</span>
	);
};

export default Logo;
