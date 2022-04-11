import React from "react";
import AddressClient from "./AddressClient";
import DataClient from "./DataClient";
import CheckOutPayment from "./CheckOutPayment";
import CheckOutDelivery from "./CheckOutDelivery";
import ChcekOutResume from "./CheckOutResume";
import TitleBackImgUser from "../../Components/titleBackImgUser/TitleBackImgUser";



const CheckOutPage = () => {

	return (
		<>
			<div className="CheckOutPage">
				<TitleBackImgUser tituloBackImgUser="Checkout"/>
				<DataClient/>
				<AddressClient/>
				<CheckOutDelivery />
				<CheckOutPayment/>
			</div>
			<div className="CheckOutPageAside">
				<ChcekOutResume />
			</div>
		</>
		

	);
};

export default CheckOutPage;
