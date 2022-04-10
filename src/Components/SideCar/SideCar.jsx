import React, {useEffect, useState} from "react";
import ItemCar from "./itemCar/ItemCar";
import "./SideCar.css";
import { useData } from "../../Services/pageContextProvider";
import Loading from "../loading/Loading";
import iconsPath from "../../Assets/Images";
import {Link} from "react-router-dom";
import routes from "../../Routes/routes";
// eslint-disable-next-line react/prop-types
const SideCar = ({setShowcart}) => {
	const {car} = useData();
	const [listCar, setListCar] = useState(car.products);
	const [userCar] = useState(car.carUser);

	const style = {
		estilo01: listCar && listCar.length != 0 ? "d-none" : "offcontent",
		estiloUL: listCar && listCar.length > 0 ? "d-on" : "d-none",
	};

	useEffect(() => {
		if(car.carUser == "anonymous" || car.carUser == undefined || car.carUser == null){
			setListCar(null);
		}else{
			setListCar(car.products);
		}
	},[car]);
	return (
		<div className="SideCar">
			<div className="title-button">
				<h2>Carrinho</h2>
				<button onClick={() => setShowcart(false)}>X</button>
			</div>
			<div className="content">
				<ul className={style.estiloUL}> 
					{listCar != null && userCar  != "anonymous" ? listCar.map((product) => {
						return(
							<ItemCar key={product.productId} title={product.title} quantidade={product.quantidade} id={product.productId} image={product.image} price={product.price}></ItemCar>
						);
					}) : <Loading></Loading> }

				</ul>
				<div className={style.estilo01}>
					<img src={iconsPath.iconCarrinho} alt="#" />
					<h1>O teu carrinho está vazio.</h1>
					<Link to={"/"}>
						<button onClick={() => setShowcart(false)} className="button">Começar a comprar</button>
					</Link>
				</div>
			</div>

			<div className="valor">
				<span>Subtotal</span> <span>0.00 €</span>
			</div>
			<div className="continue">
				<Link to={routes.checkoutpage}>
					<button onClick={() => setShowcart(false)} >Continue</button>
				</Link>
			</div>
		</div>
	);
};

export default SideCar;
