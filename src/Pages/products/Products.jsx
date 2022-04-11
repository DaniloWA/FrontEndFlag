import React, {useState, useEffect} from "react";
import { useData } from "../../Services/pageContextProvider";
import fetchAPI from "../../Middleware/getApi";
import All from "./pageComponents/categories/All";
import Men from "./pageComponents/categories/Men";
import Women from "./pageComponents/categories/Women";
import Jewelery from "./pageComponents/categories/Jewelery";
import Electronics from "./pageComponents/categories/Electronics";


import "./Products.css";

const Products = () => {
	const {data, cartAddItem} = useData();

	const [products, setProducts] = useState(data);
	const [loading, setLoading] = useState(false);
	const [category, setCategory] = useState("All");
	const categories = ["All", "Men", "Women", "Jewelery", "Electronics"];
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

	//Sorting
	const sorting = (e) => {
		const sorting = e.target.value;
		if (sorting === "asc") {
			const sorted = products.sort((a, b) => {
				return a.price - b.price;
			});
			setSorted(sorted);
			setOrder("asc");
		}
		if (sorting === "desc") {
			const sorted = products.sort((a, b) => {
				return b.price - a.price;
			});
			setSorted(sorted);
			setOrder("az");
		}
		if (sorting === "az") {
			const sorted = products.sort((a, b) => {
				if(a.title.toLowerCase()  < b.title.toLowerCase()) return -1;
				return 1;
			});
			setSorted(sorted);
			setOrder("az");
		}
		if (sorting === "za") {
			const sorted = products.sort((a, b) => {
				if(a.title.toLowerCase() < b.title.toLowerCase()) return 1;
				return -1;
			});
			setSorted(sorted);
			setOrder("za");
		}
	};
	return (
		<>
			<div className="wrapper">
				<div className="sectionWrapper center">
					<h1>Products</h1>
				</div>
				<div className="sectionWrapper">
					<hr />
				</div>
				<div className="sectionWrapper bottomPadding center">
					{categories.map((category) => (
						<button className="products_category_btn" type="button" key={category.id} onClick={() => setCategory(category)}>{category}</button>
					))}
				</div>
			</div>
			<div className="wrapper">
				<div className="sectionWrapper bottomPadding">
					<h5>Sort By:</h5>
					<select onChange={sorting} >
						<option></option>
						<option value="desc">Price highest</option>
						<option value="asc">Price lowest</option>
						<option value="az">Name A - Z</option>
						<option value="za">Name Z - A</option>
					</select>
				</div>
			</div>
			{category === "All" && <All cartAddItem={cartAddItem} products={products} loading={loading} />}
			{category === "Men" && <Men cartAddItem={cartAddItem} products={products} loading={loading} />}
			{category === "Women" && <Women cartAddItem={cartAddItem} products={products} loading={loading} />}
			{category === "Jewelery" && <Jewelery products={products} loading={loading} />}
			{category === "Electronics" && <Electronics cartAddItem={cartAddItem} products={products} loading={loading} />}
		</>
	);
	
};

export default Products;