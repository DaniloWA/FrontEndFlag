import React from "react";
import "./CardEditUser.css";
// eslint-disable-next-line react/prop-types
const CardEditUser = ({children, handleCloseClick, title}) => {
	return ( 
		<div className='CardEditUser'>
			<div className="CardEditUser_CenterOverflow">
				<div className="CardEditUser_Title">
					<h1>{title}</h1>
				</div>
				<div className="CardEditUser_Fechar">
					<button onClick={handleCloseClick}>X</button>
				</div>
				<div className="CardEditUser_Content">
					{children}
				</div>
				<div className="CardEditUser_Btn">
					<button onClick={handleCloseClick}>Done</button>
				</div>
			</div>
		</div>
	);
};
 
export default CardEditUser;