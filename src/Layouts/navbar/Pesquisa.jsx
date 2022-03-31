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
	
	const [dataBase, setDataBase] = useState();

	useEffect(() => {
		setDataBase(data);
	},[]);


	const inputRef = useRef(null);

	function handleFilter(fil) {
		setFiltered(

			dataBase.filter((product) => {
				console.log(product.title.toLowerCase());
				product.title.toString().toLowerCase().include();
			})
		);
	}
	//nome no login o login, termiar sessão é limpar do session, clicar na imagem vai pra pagina de usuario, sumir com o login quando a pessoa tiver logada, icone do cart - chamar o side card quando clicar, fazer o state pra ver se o side card estar aberto. 
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

					{filtered.slice(0, 6).map((product) => {

						return (
							<>
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
