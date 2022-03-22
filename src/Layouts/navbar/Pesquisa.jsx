import React, { useState, useEffect, useContext  } from "react";
import { PageContext} from "../../Services/pageContextProvider";



const Pesquisa = () => {

	const {data} = useContext(PageContext); //produtos da API

	const [pesquisar, setPesquisar] = useState(); 
	
	useEffect ((e) => {
		if(e.target.value === data.title){
			return data;
		} else {
			console.log("não temos este artigo");
		}
	}, []);
	
	return (
		<>
			<input
				type="text"
				name="pesquisar"
				placeholder="Pesquise..."
				value={pesquisar}
				onChange={(e)=> setPesquisar(e.target.value)}
			/>
		</>
	);
};

export default Pesquisa;
