import React, {useState, useEffect} from "react";
import "./Products.css";
import { useData } from "../../Services/pageContextProvider";
import fetchAPI from "../../Middleware/getApi";


const ProductsCard = () => {
	const {data} = useData();

	const [dataBase ] = useState(typeof data == "string" ? JSON.parse(data) : data);
	const [responseApi, setResponseApi] = useState([]);
	const [filter, setFilter] = useState(responseApi);


	//const [loading, setLoading] = useState(false);

	useEffect(() => {
		if(data == undefined || data == ""){
			fetchAPI("data","/products").then(response => {
				setFilter(response);
				setResponseApi(response);
			});
		}else{
			setResponseApi(dataBase);
			setFilter(dataBase);
		}
		//setLoading(true);
	}, []);
    
	return (
		<div>
			{filter.map((Product) => {
				return(
					<div key={Product.id} className="wrapper">
						<div className="card cardHeight">
							<img className="cardImage" src={Product.image} alt={Product.title} />
							<h2 className="cardTitle">{Product.title}</h2>
							<p className="cardPrice">Price: {Product.price}€</p>
							<button className="cardBtn">Add to cart</button>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ProductsCard;