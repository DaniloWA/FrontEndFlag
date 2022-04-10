/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbarlist = ({ title, id }) => {

	const navigate = useNavigate();
	// eslint-disable-next-line react/prop-types
	return (
		<li onClick={() => navigate(`/produto/${id}`)}>
			{title}
		</li>
	);
};

export default Navbarlist;
