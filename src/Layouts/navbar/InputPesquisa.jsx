import React from "react";
import { useData } from "../../Services/pageContextProvider";
import "../../Assets/Styles/NavBar.css";

const DropdwonSearch = () => {
	const { data } = useData();

	return (
		<div>
			<ul className="products_search_list">
				<li>
					{data.map((product) => (
						<div key={product.id} className="wrapper">
							<div className="card cardHeight">
								<img
									className="cardImage"
									src={product.image}
									alt={product.title}
								/>
								<h2 className="cardTitle">{product.title}</h2>
								<p className="cardPrice">Price: {product.price}€</p>
								<button className="cardBtn">Add to cart</button>
							</div>
						</div>
					))};
				</li>
			</ul>
		</div>
	);
};

export default DropdwonSearch;
