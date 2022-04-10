import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../Components/loading/Loading";
import { useData } from "../../Services/pageContextProvider";
import "./ProdutoPage.css";

const ProdutoPage = () => {
	const { id } = useParams();
	const { data } = useData();
    
	// eslint-disable-next-line no-unused-vars
	const [dataBase, setDataBase] = useState(typeof data == "string" ? JSON.parse(data) : data);
	const [load, setLoad] = useState(true);
	console.log(dataBase);
	// eslint-disable-next-line no-unused-vars
	const [produtoData, setProdutoData] = useState();
	const [inputNum, setInputNum] = useState(Number);

	function handleNum(e){
		setInputNum(e);
	}

	useEffect(() => {
		setProdutoData(dataBase.filter((produto) => produto.id == id));
		setLoad(false);
	}, []);

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
						<p className="ProdutoPage_produtoCard_content_disponivel">disponivel</p>
					</div>
					<div className="ProdutoPage_produtoCard_button">
						<input type="number" maxLength="3" onChange={(e) => {handleNum(e.target.value);}} value={inputNum} /> <button>ADD TO CART</button>
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