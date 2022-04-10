import React from "react";
import "./Loading.css";
import iconsPath from "../../Assets/Images";
const Loading = () => {
	return (
		<div className="Loading">
			<div>
				<img src={iconsPath.loading} alt="loading" />
			</div>
		</div>
	);
};

export default Loading;
