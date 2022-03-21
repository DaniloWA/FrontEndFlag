/* eslint-disable react/prop-types */
import React from "react";
import routes from "../../routes/routes";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/NotFoundButton.css";

const Button = (props) => {
	const navigate = useNavigate();
	function handleClick() {
		navigate(routes.home);
	}

	return (
		<button className="button" onClick={handleClick}>
			{props.titulo}
		</button>
	);
};

export default Button;
