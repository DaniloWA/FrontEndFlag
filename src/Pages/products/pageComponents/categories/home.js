/* eslint-disable react/prop-types */
import React, {useState} from "react";
import { Link } from "react-router-dom";

const Home = ({loading, homeProducts, cartAddItem}) => {
	const [currentPage] = useState(1);
	const [productsPerPage] = useState(5);

	if(loading) {
		return <h2>Loading...</h2>;
	}

	//Pagination
	const indexLast = currentPage * productsPerPage;
	const indexFirst = indexLast - productsPerPage;
	const currentProducts = homeProducts.slice(indexFirst, indexLast);

	return(
		<>
			<div className="wrapper">
				{currentProducts.map((product) => {
					return(
						<>
							<Link to={`/produto/${product.id}`}>
								<div key={product.id} className="card cardHeight">
									<img className="cardImage" src={product.image} alt={product.title} />
									<div className="cardBody">
										<h2 className="cardTitle">{product.title}</h2>
										<p className="cardPrice">Price: {product.price}€</p>
										<button onClick={() => cartAddItem({productId: product.id, title: product.title ,image: product.image ,price: product.price})} className="cardBtn">Add to cart</button>
									</div>
								</div>
							</Link>
						</>
					);
				})}
			</div>
		</>
	);
};

export default Home;