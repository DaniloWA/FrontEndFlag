/* eslint-disable react/prop-types */
import React from "react";
import img from "../itemCar/item.png";
import "./ItemCar.css";

 
// eslint-disable-next-line no-unused-vars
const ItemCar = ({id , quantidade}) => {
	return (
		<li className="ItemCar">
			<div className="img">
				<img src={img} width="40px" alt="" />
			</div>
			<div className="titulo">Titulo titulo titulo</div>
			<div className="valorItem">
				<button>-</button> <span>{quantidade || 0}</span> <button>+</button> <span>11.96€</span>
			</div>
		</li>
	);
};

export default ItemCar;
