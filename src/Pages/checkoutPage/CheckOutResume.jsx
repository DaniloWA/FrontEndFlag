import React from "react";

const ChcekOutResume = () => {
	return (
		<div className="checkOutResume">
			<div className="checkOutResum_Item">
				<h2>Item</h2>
				<p>25€</p>
			</div>
			<div className="checkOutResume_feeDelivery">
				<h2>Delivery Tax</h2>
				<span>2,5€</span>
			</div>
			<div className="checkOutResume_promoCode">
				<label>Promo Code</label>
				<input type="text" name="promocode" placeholder="Your code" />
			</div>
			<div className="CheckOutResumeTotal">
				<h3>Total Price</h3>
				<span>27,5€</span>
			</div>
		</div>
	);
};

export default ChcekOutResume;
