/* eslint-disable react/prop-types */
import React from "react";

// eslint-disable-next-line react/prop-types
const Electronics = ({loading, products}) => {

	if(loading) {
		return <h2>Loading...</h2>;
	}


	return(
		<>
			<div className="wrapper">
				{products.map((product) => {
					return(
						<div key={product.id} className="card cardHeight">
							<img className="cardImage" src={product.image} alt={product.title} />
							<div className="cardBody">
								<h2 className="cardTitle">{product.title}</h2>
								<p className="cardPrice">Price: {product.price}€</p>
								<button className="cardBtn">Add to cart</button>
							</div>
						</div>
					);
				})}
			</div>
			<div className="wrapper">
				<div className="sectionWrapper topPadding bottomPadding center">
					<button className="products_category_btn" type="button">Vew more products</button>
				</div>
			</div>
		</>
	);
};

export default Electronics;