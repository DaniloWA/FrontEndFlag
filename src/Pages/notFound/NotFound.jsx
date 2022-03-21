import React from "react";
//import NavBar from "../../Layouts/navbar/NavBar";
//import Footer from "../../Layouts/footer/Footer";
import Button from "./Button";
import Image from "./NotFounfImage";

const NotFound = () => {
	return (
		<>
			<p>NavBAR</p>
			<section className="notFound">
				<Image />
				<h1>Esse código significa página não encontrada!</h1>
				<p>
          A página que está procurando parece estar perdida ou o produto ainda
          não foi registrado, mas há um modo de voltar:
				</p>
				<h2>Clique no botão abaixo</h2>
				<Button onClick="onClick" titulo="Home" />
			</section>
			<div>
				<p>Footer</p>
			</div>
		</>
	);
};

export default NotFound;
