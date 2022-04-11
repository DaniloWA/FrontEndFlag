import React, {useState, useEffect} from "react";
import "./Products.css";
import { useData } from "../../Services/pageContextProvider";
import fetchAPI from "../../Middleware/getApi";
import { Link } from "react-router-dom";


const Products = () => {
	const {data, cartAddItem} = useData();

	const [dataBase ] = useState(data);
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
			setResponseApi(dataBase);
			setFilter(dataBase);
		}
		//setLoading(true);
	}, []);
	return (
		<div className="wrapper">
			<div className="sectionWrapper">
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
							<Link to={`/produto/${Product.id}`}>
								<img className="cardImage" src={Product.image} alt={Product.title} />
							</Link>
							<div className="cardBody">
								<h2 className="cardTitle">{Product.title}</h2>
								<p className="cardPrice">Price: {Product.price}€</p>
								<button onClick={() => cartAddItem({productId: Product.id, title: Product.title ,image: Product.image ,price: Product.price})} className="cardBtn">Add to cart</button>
							</div>
						</div>
					</div>
				);
			})}
		</div>
       
	);
};

export default Products;

// {produtoid: Product.id, price:Product.price , image: Product.image}