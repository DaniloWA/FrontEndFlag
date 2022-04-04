import React, { useState } from "react";
import { useData } from "../../Services/pageContextProvider";
import "../../Assets/Styles/NavBar.css";
import BoxCard from "../../Components/boxCard/BoxCard";
import CardProduct from "../../Components/cardProduct/CardProduct";
import iconsPath from "../../Assets/Images";


const Pesquisa = () => {
	// eslint-disable-next-line no-unused-vars
	const { data } = useData();

	const [pesquisar, setPesquisar] = useState("");
	const [filtered, setFiltered] = useState();
	const [dataBase] = useState(JSON.parse(data));
	const [displayBox, setDisplayBox] = useState(false);
	// eslint-disable-next-line no-unused-vars
	const [showInput, setShowInput] = useState(true);

	//const inputRef = useRef(null);

	// eslint-disable-next-line no-unused-vars
	function handleFilter(fil) {
		
		setFiltered(
			dataBase.filter((product) => {
				console.log(
					product.title.toLowerCase().includes(fil.toLocaleLowerCase())
				);
				return product.title.toLowerCase().includes(fil.toLocaleLowerCase());
			})
		);
		setDisplayBox(true);
	}

	function handleShowInput() {
		console.log("is clicking fine");
		setShowInput(!showInput);

	}

	function handleChange(e) {
		setPesquisar(e);
		handleFilter(pesquisar);
	}
	// 6 - o nome do usuario, terminar o layout de pesquisa
	return (
		<div >
			{showInput ? <input
				className="Pesquisa_searchBar"
				type="search"
				name="pesquisar"
				placeholder="Search here"
				value={pesquisar}
				onChange={(e) => handleChange(e.target.value)}
				// eslint-disable-next-line no-unused-vars
				onBlur={() => {
					setDisplayBox(false);
				}}
				onFocus={() => {
					handleFilter(pesquisar);
				}}
			/> : null}
			
			<div className="Pesquisa_searchImg">
				<img src={iconsPath.iconLupaNavbar} alt="Lupa's icon" onClick={() => handleShowInput()} />
				<span>Search</span>
			</div>
			{displayBox && pesquisar ? (
				<BoxCard>
					{filtered.slice(0, 6).map((product) => {
						return (
							<CardProduct
								key={product.id}
								title={product.title}
								image={product.image}
							/>
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
