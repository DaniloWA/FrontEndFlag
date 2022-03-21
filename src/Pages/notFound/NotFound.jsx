import React from "react";
import NavBar from "../../layout/navbar/NavBar";
import Footer from "../../layout/footer/Footer";
import Button from "./Button";
import Image from "./NotFounfImage";

const NotFound = () => {
	return (
		<>
			<NavBar></NavBar>
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
				<Footer></Footer>
			</div>
		</>
	);
};

export default NotFound;