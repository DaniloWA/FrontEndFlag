import React, { useState } from "react";
import CardCliente from "../../Components/cardCliente/CardCliente";
import DetalhesCardUser from "../../Components/cardCliente/detalhesCardUser/DetalhesCardUser";
import InfoCardUser from "../../Components/cardCliente/infoCardUser/InfoCardUser";
import BotaoCardUser from "../../Components/cardCliente/botaoCardUser/BotaoCardUser";
import { useData } from "../../Services/pageContextProvider";
import TitleBackImgUser from "../../Components/titleBackImgUser/TitleBackImgUser";
// eslint-disable-next-line no-unused-vars
import EditCliente from "../../Components/editCliente/EditCliente";
import HisEncomenda from "../../Components/hisEncomenda/HisEncomenda";
import CardEditUser from "../../Components/cardEditUser/CardEditUser";
import EditPagamento from "../../Components/editPagamento/EditPagamento";

import "./Cliente.css";

const Cliente = () => {
	const {user} = useData();
	const [usuario] = useState(user.currentUser);
	const [renderComp, setRnderComp] = useState({
		detailsUser: false,
		detailsPagamento: false,
		detailsMorada: false,
	});

	function handleUserClick(){
		if(!renderComp.detailsUser){
			setRnderComp({...renderComp, detailsUser: true});
			document.body.style.overflow = "hidden";
		}
	}
	
	function handlePagamentoClick(){
		if(!renderComp.detailsPagamento){
			setRnderComp({...renderComp, detailsPagamento: true});
			document.body.style.overflow = "hidden";
		}
	}

	function handleMoradaClick(){
		if(!renderComp.detailsMorada){
			setRnderComp({...renderComp, detailsMorada: true});
			document.body.style.overflow = "hidden";
		}
	}

	function handleCloseClick(){
		if(renderComp){
			setRnderComp({
				detailsUser: false,
				detailsPagamento: false,
				detailsMorada:false,
			});
			document.body.style.overflow = "visible";
		}
	}

	if(usuario === "anonymous" || usuario.name === "anonymous" || usuario.name == undefined || usuario.name.firstname == undefined){
		return(
			<CardCliente  className="Cliente">
				<DetalhesCardUser title={"Anonymous user"} desc={"Tou have to be logged to see the content of this web page"}/>
			</CardCliente>
		);
	}else if (usuario.name && usuario.name != "anonymous" && usuario.name.firstname){
		return ( 
			<div className="Cliente">
				<TitleBackImgUser tituloBackImgUser="Account"></TitleBackImgUser>
				<CardCliente>
					<DetalhesCardUser title={"Account Details"} desc={"Change your account's details and delivery adress"}/>
					<InfoCardUser nome={usuario.name.firstname + " " + usuario.name.lastname} desc={"There are no delivery details"} />
					<BotaoCardUser funcRender={handleUserClick} handleCloseClick={handleCloseClick} renderComp={renderComp} setRnderComp={setRnderComp}/>
				</CardCliente>

				<CardCliente>
					<DetalhesCardUser title={"Payment details"} desc={"Change your cards and payment methods"}/>
					<InfoCardUser nome={"Payment references will be generated "} desc={"During the checkout process."} />
					<BotaoCardUser funcRender={handlePagamentoClick} renderComp={renderComp} setRnderComp={setRnderComp}/>
				</CardCliente>

				<CardCliente>
					<DetalhesCardUser title={"Billing details"} desc={"Change your billing address"}/>
					<InfoCardUser nome={usuario.address.street + " "  } desc={usuario.address.zipcode + " " + usuario.address.city} />
					<BotaoCardUser funcRender={handleMoradaClick} renderComp={renderComp} setRnderComp={setRnderComp}/>
				</CardCliente>

				<HisEncomenda></HisEncomenda>
				
				{renderComp.detailsUser ? <CardEditUser title={"Account Details"} handleCloseClick={handleCloseClick}><EditCliente ></EditCliente></CardEditUser>: ""}
				{renderComp.detailsPagamento ? <CardEditUser title={"Payment Details"} handleCloseClick={handleCloseClick}><EditPagamento ></EditPagamento></CardEditUser>: ""}
				{renderComp.detailsMorada ? <CardEditUser title={"Billing Details"} handleCloseClick={handleCloseClick}><EditCliente ></EditCliente></CardEditUser> : ""}
			</div>
		);
		
	}
};
 
export default Cliente;