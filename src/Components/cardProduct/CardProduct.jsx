import React from "react";
import "./CardProduct.css";

// eslint-disable-next-line react/prop-types
const CardProduct = ({ title, image }) => {
	const titles = title;
	const sliceTitle = titles.slice(0, 12);

	return (
		<div className="CardProduct">
			<div className="CardProduct_img">
				<img src={image} alt="#" width="100px" />
			</div>
			<div className="CardProduct_titulo">
				<h1>
					<abbr title={titles}>{sliceTitle} ...</abbr>
				</h1>
			</div>
		</div>
	);
};

export default CardProduct;
