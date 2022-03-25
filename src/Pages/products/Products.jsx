import React, {useState, useEffect} from "react";
import "./Products.css";
import { useData } from "../../Services/pageContextProvider";
import fetchAPI from "../../Middleware/getApi";


const Products = () => {
	const {data} = useData();
	const [responseApi, setResponseApi] = useState([]);
	const [filter, setFilter] = useState(responseApi);


	//const [loading, setLoading] = useState(false);

	const filterProduct = (cat) => {
		const update = responseApi.filter((x)=>x.category === cat);
		setFilter(update);
	};

	useEffect(() => {
		if(data == undefined || data == ""){
			fetchAPI("data","/products").then(response => {
				setFilter(response);
				setResponseApi(response);
			});
		}else{
			setResponseApi(data);
			setFilter(data);
		}
		//setLoading(true);
	}, []);
    
	return (
		<div>
			<div>
				<h1>Produtos</h1>
				<hr />
				<button className="all" onClick={()=>setFilter(responseApi)}>All</button>
				<button className="men" onClick={()=>filterProduct("men's clothing")}>Men&apos;s Clothing</button>
				<button className="womens" onClick={()=>filterProduct("women's clothing")}>Women&apos;s Clothing</button>
				<button className="jewe" onClick={()=>filterProduct("jewelery")}>Jewelery</button>
				<button className="elec" onClick={()=>filterProduct("electronics")}>Electronic</button>
			</div>	
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

export default Products;