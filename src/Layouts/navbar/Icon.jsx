import React from "react";
import { useNavigate } from "react-router-dom";
import user from "../../Assets/Images/user64.png";
import shoppingBag from "../../Assets/Images/shopping-bag64.png";
import "../../Assets/Styles/NavBar.css";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Favorite from "@mui/icons-material/Favorite";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";

const Icon = () => {
	const navigate = useNavigate();

	return (
		<div id="icons">
			<div>
				<Checkbox
					sx={{ p: "none", size: "large"}}
					icon={<FavoriteBorder />}
					checkedIcon={<Favorite />}
					onClick={() => navigate("/Favoritos")}
				/>
			</div>

			<div className="usuario_select">
				<img src={user} alt="Login" />
				<FormControl sx={{ m: 1, minWidth: 100, borderColor: "none", p: "none" }}>
					<Select sx={{ p: "none" }}>
						<MenuItem onClick={() => navigate("/Login")} >Login</MenuItem>
						<MenuItem onClick={() => navigate("/")} sx={{ p: "none" }}>Minha conta</MenuItem>
					</Select>
				</FormControl>
			</div>
			<div className="sacola">
				<img
					src={shoppingBag}
					alt="Carrinho"
					onClick={() => navigate("/Carrinho")}
				/>
				<span className="sacola_icon">
					<span className="sacola_item">1</span>
				</span>
			</div>
		</div>
	);
};

export default Icon;
