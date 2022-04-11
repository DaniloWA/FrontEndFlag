/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useData } from "../../Services/pageContextProvider";

const ChcekOutResume = () => {
	const {car} = useData();
	const [listCar, setListCar] = useState(car.products);
	const [subCar, setSubCar] = useState(0);

	useEffect(() => {
		if(car.carUser == "anonymous" || car.carUser == undefined || car.carUser == null){
			setListCar(null);
		}else{
			setListCar(car.products);
		}

		if(listCar.length > 0){
			setSubCar(listCar?.reduce((acc, obj) => { 
				let sum = obj.price;
				if(obj.quantidade > 1) {
					sum = obj.price * obj.quantidade;
				}
				return acc + sum;}, 0));
		}

	},[car]);

	return (
		<div className="checkOutResumePage">
			<div className="checkOutResum_Item">
				<h2>Subtotal</h2>
				<p>{subCar != 0 ? subCar.toFixed( 2 ) : 0} €</p>
			</div>
			<div className="checkOutResume_feeDelivery">
				<h2>Delivery Tax</h2>
				<span>2.5€</span>
			</div>
			<div className="checkOutResume_promoCode">
				<label>Promo Code</label>
				<input type="text" name="promocode" placeholder="Your code" />
			</div>
			<div className="CheckOutResumeTotal">
				<h3>Total Price</h3>
				<span>{subCar != 0 ? Number(subCar.toFixed( 2 )) + 2.5 : 2.5} €</span>
			</div>
		</div>
	);
};

export default ChcekOutResume;
