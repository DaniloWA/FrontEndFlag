import React, { useState } from "react";
import { useData } from "../../Services/pageContextProvider";
import "../../Assets/Styles/NavBar.css";
import BoxCard from "../../Components/boxCard/BoxCard";
import CardProduct from "../../Components/cardProduct/CardProduct";

const Pesquisa = () => {
	// eslint-disable-next-line no-unused-vars
	const { data } = useData();

	const [pesquisar, setPesquisar] = useState("");
	const [filtered, setFiltered] = useState();
	const [dataBase] = useState(data);
	const [displayBox, setDisplayBox] = useState(false);

	//const inputRef = useRef(null);

	// eslint-disable-next-line no-unused-vars
	function handleFilter(fil) {
		setFiltered(
			dataBase.filter((product) => {
				return product.title.toLowerCase().includes(fil.toLocaleLowerCase());
			})
		);
		setDisplayBox(true);
	}
	

	function handleChange(e) {
		setPesquisar(e);
		handleFilter(pesquisar);
	}
	// 6 - terminar o layout de pesquisa
	return (
		<div>
			<input
				className="search_bar"
				type="search"
				name="pesquisar"
				placeholder="Search here"
				value={pesquisar}
				onChange={(e) => handleChange(e.target.value)}
			/>
			{displayBox ? (
				<BoxCard>
					{filtered.slice(0, 6).map((product) => {
						return (
							<CardProduct
								key={product.id}
								title={product.title}
								image={product.image}
							/>
						);
					})}ç
				</BoxCard>
			) : (
				""
			)}
		</div>
	);
};

export default Pesquisa;
