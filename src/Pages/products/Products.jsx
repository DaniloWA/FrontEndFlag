import React, {useState, useEffect} from "react";
import "./Products.css";

const Products = () => {

	const [data, setData] = useState([]);
    
	const [filter, setFilter] = useState(data);

	//const [loading, setLoading] = useState(false);

	const filterProduct = (cat) => {
		const update = data.filter((x)=>x.category === cat);
		setFilter(update);
	};

	let componentMounted = true;

	useEffect(() => {
		//setLoading(true);
		const getProducts = async() => {
			const response = await fetch("https://fakestoreapi.com/products");
			if(componentMounted){
				setData(await response.clone().json());
				setFilter(await response.json());
				//setLoading(false);
			}

			return () => {
				componentMounted = false;
			};
		};

		getProducts();
	}, []);
    
	return (
		<div>
			<div>
				<h1>Produtos</h1>
				<hr />
				<button className="all" onClick={()=>setFilter(data)}>All</button>
				<button className="men" onClick={()=>filterProduct("men's clothing")}>Men&apos;s Clothing</button>
				<button className="womens" onClick={()=>filterProduct("women's clothing")}>Women&apos;s Clothing</button>
				<button className="jewe" onClick={()=>filterProduct("jewelery")}>Jewelery</button>
				<button className="elec" onClick={()=>filterProduct("electronics")}>Electronic</button>
			</div>
			{filter.map((Product) => {
				return(
					<>
						<div className="wrapper">
							<div className="card cardHeight">
								<img className="cardImage" src={Product.image} alt={Product.title} />
								<h2 className="cardTitle">{Product.title}</h2>
								<p className="cardPrice">Price: {Product.price}€</p>
								<button className="cardBtn">Add to cart</button>
							</div>
						</div>
					</>
				);
			})}
		</div>
       
	);
};

export default Products;