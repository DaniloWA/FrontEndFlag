/* eslint-disable react/prop-types */
import React from "react";
import { useData } from "../../../Services/pageContextProvider";
import "./ItemCar.css";

 
// eslint-disable-next-line no-unused-vars
const ItemCar = ({id , quantidade, price , title , image}) => {
	const {addQuant, subQuant} = useData();
	return (
		<li className="ItemCar">
			<div className="img">
				<img src={image} width="40px" alt="" />
			</div>
			<div className="titulo">{title}</div>
			<div className="valorItem">
				<button onClick={()=> subQuant(id)}>-</button> <span>{quantidade || 0}</span> <button onClick={()=> addQuant(id)}>+</button> <span>{price}€</span>
			</div>
		</li>
	);
};

export default ItemCar;
