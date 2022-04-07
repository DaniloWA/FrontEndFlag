import React, { useState } from "react";
import { useData } from "../../Services/pageContextProvider";
import "./NavBar.css";
import BoxCard from "../../Components/boxCard/BoxCard";
import CardProduct from "../../Components/cardProduct/CardProduct";
import iconsPath from "../../Assets/Images";
import Navbarlist from "../../Components/navbarlist/Navbarlist";


const Pesquisa = () => {
	const { data } = useData();
	
	const [pesquisar, setPesquisar] = useState("");
	const [filtered, setFiltered] = useState();
	const [dataBase] = useState(JSON.parse(data));
	const [displayBox, setDisplayBox] = useState(false);
	const [showInput, setShowInput] = useState(true);

	function handleFilter(fil) {
		
		setFiltered(
			dataBase.filter((product) => {
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
				onBlur={() => {
					setDisplayBox(false);
				}}
				onFocus={() => {
					handleFilter(pesquisar);
				}}
			/> : null}

			{!showInput ? <input
				className="Pesquisa_searchBar_expanded"
				type="search"
				name="pesquisar"
				placeholder="Search here"
				value={pesquisar}
				onChange={(e) => handleChange(e.target.value)}
				onBlur={() => {
					setDisplayBox(false);
				}}
				onFocus={() => {
					handleFilter(pesquisar);
				}}
			/>: null}
			
			<div className="Pesquisa_searchImg">
				<img src={iconsPath.iconLupaNavbar} alt="Lupa's icon" onClick={() => handleShowInput()} />
				<span>Search</span>
			</div>
			
			{displayBox && pesquisar ? (
				<BoxCard>

					{filtered.length != 0 ? filtered.slice(0, 6).map((product) => {
						return (
							<CardProduct
								key={product.id}
								title={product.title}
								image={product.image}
							/>
						);
					}): <p className="Pesquisa_cardProduct">The product typed was not find</p>} 
					<div>
						<ul className="Pesquisa_Navbarlist_ul">
							{filtered.length != 0 ?filtered.slice(0, 6).map((product) => {
								return (
									<Navbarlist
										key={product.id}
										title={product.title}
									/>
								);
							}) : <p className="Pesquisa_navbarlist">The product typed was not find</p>}
						</ul>
					</div>
					
				</BoxCard>
			) : (
				""
			)}
		</div>
	);
};

export default Pesquisa;
