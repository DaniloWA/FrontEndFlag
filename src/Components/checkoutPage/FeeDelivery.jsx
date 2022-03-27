import React, {useState} from "react";

// eslint-disable-next-line react/prop-types
const FeeDelivery = ({title, price}) => {
	const [storeDelivery, setStoreDelivey] = useState();
	console.log(title, price);
	return ( <>
		<div>
			<input type="radio" name="storeDelivery"
				value={storeDelivery}
				onChange={() => setStoreDelivey()}
			/>
			<label></label>
			<span></span>
		</div>
	</> );
};
 
export default FeeDelivery;