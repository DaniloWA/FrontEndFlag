/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useData } from "../../Services/pageContextProvider";
import "../../Assets/Styles/NavBar.css";
import BoxCard from "../../Components/boxCard/BoxCard";
import CardProduct from "../../Components/cardProduct/CardProduct";

const Pesquisa = () => {
	// eslint-disable-next-line no-unused-vars
	const { data } = useData();

	const [pesquisar, setPesquisar] = useState("");
	const [filter, setFilter] = useState();
	const [dataBase, setDataBase] = useState(JSON.parse(data));
	console.log(dataBase);

	function handleFilter(e) {
		setPesquisar(e);
		setFilter(
			dataBase.filter((product) => {
				console.log(product.title.toLowerCase());
				product.title.toString().toLowerCase().include();
				
			})
		);
	}

	return (
		<div>
			<input
				className="search_bar"
				type="search"
				name="pesquisar"
				placeholder="Pesquise..."
				value={pesquisar}
				onChange={(e) => handleFilter(e.target.value)}
			/>
			{filter ? (
				<BoxCard>
					{filter?.map((product) => {
						return (
							<>
								<CardProduct title={product.title} image={product.image} />
								<CardProduct title={product.title} image={product.image} />
							</>
						);
					})}
				</BoxCard>
			) : (
				""
			)}
		</div>
	);
};

export default Pesquisa;
