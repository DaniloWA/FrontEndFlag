/* eslint-disable no-unused-vars */
import React, {  useEffect, useState} from "react";
import ItemCar from "./itemCar/ItemCar";
import "./SideCar.css";
import { useData } from "../../Services/pageContextProvider";
import Loading from "../loading/Loading";
import iconsPath from "../../Assets/Images";
// eslint-disable-next-line react/prop-types
const SideCar = ({setShowcart}) => {
	const {car} = useData();
	const [listCar, setListCar] = useState(car.carrinho);
	const [userCar, setUserCar] = useState(car.carUser);
	// eslint-disable-next-line no-unused-vars

	const [load, setLoad] = useState(false);
	const style = {
		estilo01: listCar ? "d-none" : "offcontent",
		estiloUL: listCar ? "d-on" : "d-none",
	};

	useEffect(() => {
		if(car.carUser == "anonymous" || car.carUser == undefined || car.carUser == null){
			setListCar(null);
		}else{
			setListCar(car.carrinho);
		}
	},[car]);
	console.log(car);
	return (
		<div className="SideCar">
			<div className="title-button">
				<h2>Carrinho</h2>
				<button onClick={() => setShowcart(false)}>X</button>
			</div>
			<div className="content">
				<ul className={style.estiloUL}> 
					{listCar != null && userCar  != "anonymous" ? 
						<ItemCar key={listCar.productId} title={listCar.title} id={listCar.productId} quantidade={listCar.quantity}></ItemCar>: <Loading></Loading> }
				</ul>
				<div className={style.estilo01}>
					<img src={iconsPath.iconCarrinho} alt="#" />
					<h1>O teu carrinho está vazio.</h1>
					<button className="button">Começar a comprar</button>
				</div>
			</div>

			<div className="valor">
				<span>Subtotal</span> <span>0.00 €</span>
			</div>
			<div className="continue">
				<button>Continue</button>
			</div>
		</div>
	);
};

export default SideCar;


/*
listCar.products.map((product) => {
						return(
							<ItemCar key={product.productId} id={product.productId} quantidade={product.quantity}></ItemCar>
						);
					}) : <Loading></Loading> }

*/