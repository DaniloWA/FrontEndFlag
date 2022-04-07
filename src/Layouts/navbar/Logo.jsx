/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";
import routes from "../../Routes/routes";



const Logo = () => {
	const Navegar = useNavigate();
	return (
		<span  onClick={() => Navegar(routes.inicio)}  className="Logo_nome">DMS</span>
	);
};

export default Logo;
