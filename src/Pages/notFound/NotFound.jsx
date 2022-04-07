import React from "react";
import Button from "./Button";
import Image from "./NotFounfImage";

const NotFound = () => {
	return (
		<section className="notFound">
			<Image />
			<h1>This code means page not found!</h1>
			<p>
			The page you are looking for seems to be lost, or the product has not yet been registered, but there is a way back:
			</p>
			<h2>Click on the button below</h2>
			<Button onClick="onClick" titulo="Home" />
		</section>
	);
};

export default NotFound;
