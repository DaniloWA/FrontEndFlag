import React from "react";
import "./Footer.css";

const MadeBy = () => {
	return (
		<div className="Footer_madeBy">
      Made by{" "}
			<a href="https://www.linkedin.com/in/danilo-oliveira-web/">
				{" "}
        Danilo Oliveira
			</a>{" "}
      , <a href="https://www.linkedin.com/in/milenafleming/">
				{" "}
        Milena Fleming
			</a>{" "}
      and{" "}
			<a href="https://www.linkedin.com/in/sergio-m-a-pinto"> Sergio Pinto</a>
		</div>
	);
};

export default MadeBy;
