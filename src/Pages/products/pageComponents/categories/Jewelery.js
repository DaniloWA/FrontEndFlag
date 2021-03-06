/* eslint-disable react/prop-types */
import React, {useState} from "react";
import Paginate from "../../pageComponents/Paginate";
import { Link } from "react-router-dom";

const Jewelery = ({products, loading, cartAddItem}) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [productsPerPage] = useState(5);

	if(loading) {
		return <h2>Loading...</h2>;
	}
    
	const category = products.filter((filter) =>{
		return filter.category === "jewelery";
	});

	//Pagination
	const indexLast = currentPage * productsPerPage;
	const indexFirst = indexLast - productsPerPage;
	const currentProducts = category.slice(indexFirst, indexLast);

	//ChangePage
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return(
		<>
			<div className="wrapper">
				{currentProducts.map((product) => {
					return(
						<>
							<div key={product.id} className="card cardHeight">
								<Link  to={`/produto/${product.id}`}>
									<div className="cardImage">
										<img src={product.image} alt={product.title} />
									</div>
								</Link>
								<div className="cardBody">
									<h2 className="cardTitle">{product.title}</h2>
									<p className="cardPrice">Price: {product.price}€</p>
									<button onClick={() => cartAddItem({productId: product.id, title: product.title ,image: product.image ,price: product.price})} className="cardBtn">Add to cart</button>
								</div>
							</div>
						</>
					);
				})}
			</div>
			<Paginate productsPerPage={productsPerPage} totalProducts={category.length} paginate={paginate} />
			<div className="products_margin_top"></div>
		</>
	);
};

export default Jewelery;