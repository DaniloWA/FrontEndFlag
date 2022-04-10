/* eslint-disable react/prop-types */
import React from "react";
import routes from "../../Routes/routes";
import { useNavigate } from "react-router-dom";
import "./NotFoundButton.css";

const Button = (props) => {
	const navigate = useNavigate();
	function handleClick() {
		navigate(routes.inicio);
	}

	return (
		<button className="Button" onClick={handleClick}>
			{props.titulo}
		</button>
	);
};

export default Button;
