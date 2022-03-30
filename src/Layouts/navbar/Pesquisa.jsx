/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import { useData } from "../../Services/pageContextProvider";
import "../../Assets/Styles/NavBar.css";
import BoxCard from "../../Components/boxCard/BoxCard";
import CardProduct from "../../Components/cardProduct/CardProduct";

const Pesquisa = () => {
	// eslint-disable-next-line no-unused-vars
	const { data } = useData();

	const [pesquisar, setPesquisar] = useState("");
	const [filtered, setFiltered] = useState();
	const [dataBase, setDataBase] = useState(JSON.parse(data));
	console.log(pesquisar);
	
	const [displayBox, setDisplayBox] = useState(false);

	const inputRef = useRef(null);
 
	function handleFilter(fil) {
		setFiltered(
			dataBase.filter((product) => {
				return product.title.toLowerCase().includes(fil.toLowerCase());
			})
		);
		setDisplayBox(true);                            
	}

	function handleChange(e) {
		setPesquisar(e);
		handleFilter(pesquisar);
	}

	return (
		<div>
			<input
				className="search_bar"
				type="search"
				name="pesquisar"
				placeholder="Pesquise..."
				value={pesquisar}
				onChange={(e) => handleChange(e.target.value)}
				ref={inputRef}
			/>
			

			{displayBox ? (
				console.log(filtered),
				<BoxCard>
					{filtered.slice(0, 1).map((product) => {
						return (
							<>
								<CardProduct title={product.title} image={product.image} />
								<CardProduct title={product.title} image={product.image} />
							</>
						);
					})}
				</BoxCard>
			) : (console.log("não ativo"))}
		</div>
			
	);
};

export default Pesquisa;
