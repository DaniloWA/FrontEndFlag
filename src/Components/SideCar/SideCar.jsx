import React, {  useEffect, useState} from "react";
import ItemCar from "./itemCar/ItemCar";
import "./SideCar.css";
import { useData } from "../../Services/pageContextProvider";
import fetchAPI from "../../Middleware/getApi";

const SideCar = () => {
	const {car} = useData();
	const [cart, setCart] = useState();

	const style = {
		estilo01: cart ? "d-none" : "offcontent",
		estiloUL: cart ? "d-on" : "d-none",
	};

	useEffect(() => {
		if(car == undefined || car == ""){
			fetchAPI("car","/carts").then(response => setCart(response));
		}else{
			setCart(car);
		}
	},[]);

	return (
		<div className="SideCar">
			<div className="title-button">
				<h2>Carrinho</h2>
				<button>X</button>
			</div>
			<div className="content">
				<ul className={style.estiloUL}> 
					{cart != undefined ? cart[0].products.map((Product) => {
						return(
							<ItemCar key={Product.productId} id={Product.productId} quantidade={Product.quantity}></ItemCar>
						);
					}) : <h1> Carregando ...</h1>  }
				</ul>
				<div className={style.estilo01}>
					<img src="#" alt="#" />
					<h1>O teu carrinho está vazio.</h1>
					<button className="button">Começar a comprar</button>
				</div>
			</div>

			<div className="valor">
				<span>Subtotal</span> <span>0.00 €</span>
			</div>
			<div className="continue">
				<button>Continuar</button>
			</div>
		</div>
	);
};

export default SideCar;
