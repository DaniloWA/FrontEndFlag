import React, { useContext, useEffect, useState } from "react";
import { PageContext } from "../../Services/pageContextProvider";

const Pesquisa = () => {
	// eslint-disable-next-line no-unused-vars
	const { data } = useContext(PageContext); //produtos da API
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
		<>
			<input
				type="search"
				name="pesquisar"
				placeholder="Pesquise..."
				value={pesquisar}
				onChange={(e) => setPesquisar(e.target.value)}
			/>

			{pesquisar.map((Product) => {
				<div className="card" key={Product.id}>
					<div className="card_body">
						<img src={Product.image} alt={Product.title} />
						<h2 className="cart_title">{Product.title}</h2>
						<p className="price">Price: {Product.price}€</p>
						<button className="card_btn">Add to cart</button>
					</div>
				</div>;
			})}
		</>
	);
};

export default Pesquisa;
