import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../Components/loading/Loading";
import { useData } from "../../Services/pageContextProvider";
import "./ProdutoPage.css";

const ProdutoPage = () => {
	const { id } = useParams();
	const { data, addNumQuant} = useData();
    
	// eslint-disable-next-line no-unused-vars
	const [dataBase, setDataBase] = useState(data);
	const [load, setLoad] = useState(true);
	// eslint-disable-next-line no-unused-vars
	const [produtoData, setProdutoData] = useState();
	const [inputNum, setInputNum] = useState(0);

	function handleNum(e){
		setInputNum(e);
	}

	useEffect(() => {
		setProdutoData(dataBase.filter((produto) => produto.id == id));
		setLoad(false);
	}, [id,inputNum]);

	return ( 
		<div className="ProdutoPage">
			{!load ? 
				<><div className="ProdutoPage_produtoCard">
					<div className="ProdutoPage_produtoCard_img">
						<img src={produtoData[0].image} width="40px" alt="imgProduto" />
					</div>
					<div className="ProdutoPage_produtoCard_content">
						<h1>{produtoData[0].title}</h1>
						<p>{produtoData[0].price}€</p>
						<p className="ProdutoPage_produtoCard_content_nota">Nota: <span>{produtoData[0].rating.rate}/5</span></p>
					</div>
					<div className="ProdutoPage_produtoCard_button">
						<input type="number" maxLength="3" onChange={(e) => {handleNum(e.target.value);}}  value={inputNum} /> <button onClick={() => addNumQuant({productId: produtoData[0].id, title: produtoData[0].title ,image: produtoData[0].image ,price: produtoData[0].price}, inputNum)}>ADD TO CART</button>
					</div>
					<div className="ProdutoPage_produtoCard_info">
						<p>{produtoData[0].description}</p>
					</div>
				</div><div>
					<div className="ProdutoPage_envio">
						<div>
							<img src="#" alt="" />
							<h3>Free Shipping</h3>
							<p>On orders starting at 35€</p>
						</div>
						<div>
							<img src="#" alt="" />
							<h3>Fast Returns</h3>
							<p>Simple and without delay</p>
						</div>
						<div>
							<img src="#" alt="" />
							<h3>Secure Payments</h3>
							<p>Modern Payments</p>
						</div>
					</div>
				</div></> : <Loading></Loading> }
			
		</div>
	);
};
 
export default ProdutoPage;