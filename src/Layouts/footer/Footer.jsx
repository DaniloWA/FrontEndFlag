import React from "react";
import { Link } from "react-router-dom";
import routes from "../../Routes/routes";
import iconsPath from "../../Assets/Images";
import "./Footer.css";

const Footer = () => {
	return (
		<footer className="footer">
			<section>
				<h2>Informations</h2>
				<ul>
					<li>About us</li>
					<li>Contact us</li>
					<li>Exchanges and Return Policy</li>
				</ul>
				<h2>Section</h2>
				<ul>
					<Link to={routes.login}>Login</Link>
					<Link to={routes.favorites}>Favorite</Link>
				</ul>
				<h2>Social</h2>
				<ul>
					<li>
						<img src={iconsPath.instagram} alt="Instgram's icon" />
					</li>
					<li>
						<img src={iconsPath.facebook} alt="Facebook's icon" />
					</li>
				</ul>
        Made by{" "}
				<a href="https://www.linkedin.com/in/danilo-oliveira-web/">
					{" "}
          Danilo Oliveira
				</a>{" "}
        ,{" "}
				<a href="https://www.linkedin.com/in/milenafleming/">
					{" "}
          Milena Fleming
				</a>{" "}
        and <a href="#"> Sergio</a>
			</section>
		</footer>
	);
};

export default Footer;
