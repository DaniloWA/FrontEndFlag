/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const Product = ({products, loading, cartAddItem}) => {
	if(loading) {
		return <h2>Loading...</h2>;
	}

	return(
		<div className="wrapper">
			{products.map((product) => {
				return(
					<div key={products.id} className="card cardHeight">
						<Link className="cardImage" to={`/produto/${product.id}`}>
							<img src={product.image} alt={product.title} />
						</Link>
						<div className="cardBody">
							<h2 className="cardTitle">{product.title}</h2>
							<p className="cardPrice">Price: {product.price}€</p>
							<button onClick={() => cartAddItem({productId: product.id, title: product.title ,image: product.image ,price: product.price})} className="cardBtn">Add to cart</button>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Product;