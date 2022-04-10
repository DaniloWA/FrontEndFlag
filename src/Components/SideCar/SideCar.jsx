import React, { useEffect, useState } from "react";
import ItemCar from "./itemCar/ItemCar";
import "./SideCar.css";
import { useData } from "../../Services/pageContextProvider";
import fetchAPI from "../../Middleware/getApi";

const SideCar = () => {
	const { car } = useData();
	const [cart, setCart] = useState(
		typeof car == "string" ? JSON.parse(car) : car
	);

	const style = {
		estilo01: cart ? "d-none" : "offcontent",
		estiloUL: cart ? "d-on" : "d-none",
	};

	useEffect(() => {
		if (car == undefined || car == "") {
			fetchAPI("car", "/carts").then((response) => setCart(response));
		} else {
			setCart(typeof car == "string" ? JSON.parse(car) : car);
		}
	}, []);
	console.log(cart.products, "carrinho info");

	return (
		<div className="SideCar">
			<div className="title-button">
				<h2>Cart</h2>
				<button>X</button>
			</div>
			<div className="content">
				<ul className={style.estiloUL}>
					{cart != undefined && cart ? (
						<ItemCar
							key={cart.productId}
							id={cart.productId}
							quantidade={cart.quantity}
						></ItemCar>
					) : (
						<h1> Loading ...</h1>
					)}
				</ul>
				<div className={style.estilo01}>
					<img src="#" alt="#" />
					<h1>Your cart is empty</h1>
					<button className="button">Start your purchase</button>
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
