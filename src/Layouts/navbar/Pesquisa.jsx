import React, {  useEffect, useState } from "react";
import {useData} from "../../Services/pageContextProvider";
import "../../Assets/Styles/NavBar.css";

const Pesquisa = () => {
	// eslint-disable-next-line no-unused-vars
	const { data } = useData();
	console.log(data);
	const [pesquisar, setPesquisar] = useState("");

	useEffect(() => {
		const lowersBusca = pesquisar.toLowerCase();
		if (pesquisar) {
			data.filter((produtos) =>
				produtos.title.toLowerCase().includes(lowersBusca)
			);
		}
	}, [pesquisar]);

	return (
		<div>
			<input
				type="search"
				name="pesquisar"
				placeholder="Pesquise..."
				value={pesquisar}
				onChange={(e) => setPesquisar(e.target.value)}
			/>
			
			{data.map((product) => {
				product.children;
			})}
		</div>
		
	);
};

export default Pesquisa;
