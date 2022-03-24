import React, {useState, useEffect} from "react";

// eslint-disable-next-line react/prop-types
const Products = ({children}) => {
	console.log(children);

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
			
			{children}
			
			{filter.map((Product) => {
				return(
					<>
						<div className="card" key={Product.id} >
							<div className="card_body">
								<img src={Product.image} alt={Product.title} />
								<h2 className="cart_title">{Product.title}</h2>
								<p className="price">Price: {Product.price}€</p>
								<button className="card_btn">Add to cart</button>
							</div>
						</div>
					</>
				);
			})}
		</div>
       
	);
};

export default Products;