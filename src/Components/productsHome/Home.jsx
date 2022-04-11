import React, {useState, useEffect} from "react";
import { useData } from "../../Services/pageContextProvider";
import fetchAPI from "../../Middleware/getApi";
import Home from "../../Pages/products/pageComponents/categories/Home";
import { Link } from "react-router-dom";
import routes from "../../Routes/routes";
import Slider from "./components/Slider";


import "../../Pages/products/Products.css";

const ProductsHome = () => {
	// eslint-disable-next-line no-unused-vars
	const {data, cartAddItem} = useData();
	const [products, setProducts] = useState(data);
	const [loading, setLoading] = useState(false);
	// eslint-disable-next-line no-unused-vars
	const [sorted, setSorted] = useState([]);
	// eslint-disable-next-line no-unused-vars
	const [order, setOrder] = useState("az");

	useEffect(() => {
		if(data == undefined || data == ""){
			setLoading(true);
			fetchAPI("data","/products").then(response => {
				setProducts(response);
			});
		}else{
			setProducts(products);
		}
		setLoading(false);
	}, []);

	const homeProducts = products.sort((a, b) => {
		return b.rating.count - a.rating.count;
	});
	return (
		<>
			<div className="wrapper">
				<div className="sectionWrapper">
					<Slider />
				</div>
				<div className="sectionWrapper">
					<hr />
				</div>
				<div className="sectionWrapper center">
					<h2> This week&apos;s featured products</h2>
				</div>
			</div>
			<div className="products_margin_top"></div>
			<Home homeProducts={homeProducts} loading={loading} />
			<div className="products_margin_top"></div>
			<div className="wrapper">
				<div className="sectionWrapper center">
					<Link to={routes.produtos}><button className="products_category_btn" type="button" >See all products</button></Link>
				</div>
			</div>
			<div className="products_margin_top"></div>
		</>
	);
	
};

export default ProductsHome;
