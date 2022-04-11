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
	const [subCar, setSubCar] = useState(0);

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
		setSubCar(listCar?.reduce((acc, obj) => { 
			let sum = obj.price;
			if(obj.quantidade > 1) {
				sum = obj.price * obj.quantidade;
			}
			return acc + sum;}, 0));
	},[car,listCar]);
	
	return (
		<div className="SideCar">
			<div className="title-button">
				<h2>Cart</h2>
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
					<h1>Your cart is empty.</h1>
					<Link to={routes.produtos}>
						<button onClick={() => setShowcart(false)} className="button">Start shoping</button>
					</Link>
				</div>
			</div>
	

			<div className="valor">
			
				
				<span>Subtotal</span> <span>{subCar ? subCar.toFixed( 2 ) : 0} €</span>
				
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
