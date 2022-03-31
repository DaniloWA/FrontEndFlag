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

import "./Cliente.css";

const Cliente = () => {
	const {user} = useData();

	const [usuario] = useState(typeof user.currentUser == "string" ?  user.currentUser == "anonymous" ? user.currentUser : JSON.parse(user.currentUser) : user.currentUser);
	const [renderComp, setRnderComp] = useState({
		detailsUser: false,
		detailsPagamento: false,
		detailsMorada: false,
	});

	function handleUserClick(){
		if(!renderComp.detailsUser){
			setRnderComp({...renderComp, detailsUser: true});
		}
	}

	function handlePagamentoClick(){
		if(!renderComp.detailsPagamento){
			setRnderComp({...renderComp, detailsPagamento: true});
		}
	}

	function handleMoradaClick(){
		if(!renderComp.detailsMorada){
			setRnderComp({...renderComp, detailsMorada: true});
		}
	}

	function handleCloseClick(){
		if(renderComp){
			setRnderComp({
				detailsUser: false,
				detailsPagamento: false,
				detailsMorada:false,
			});
		}
	}

	if(usuario === "anonymous" || usuario.name === "anonymous" || usuario.name == undefined || usuario.name.firstname == undefined){
		return(
			<CardCliente  className="Cliente">
				<DetalhesCardUser title={"Usuario Anonymo"} desc={"Você tem que estar Logado para ver o conteudo dessa pagina"}/>
			</CardCliente>
		);
	}else if (usuario.name && usuario.name != "anonymous" && usuario.name.firstname){
		return ( 
			<div className="Cliente">
				<TitleBackImgUser></TitleBackImgUser>
				<CardCliente>
					<DetalhesCardUser title={"Detalhes de conta"} desc={"Altere os detalhes da sua conta e a morada de entrega"}/>
					<InfoCardUser nome={usuario.name.firstname + " " + usuario.name.lastname} desc={"Não existem detalhes de entrega"} />
					<BotaoCardUser funcRender={handleUserClick} handleCloseClick={handleCloseClick} renderComp={renderComp} setRnderComp={setRnderComp}/>
				</CardCliente>

				<CardCliente>
					<DetalhesCardUser title={"Detalhes de pagamento"} desc={"Altere os seus cartões e métodos de pagamento"}/>
					<InfoCardUser nome={usuario.name.firstname + " " + usuario.name.lastname} desc={"Não existem detalhes de entrega"} />
					<BotaoCardUser funcRender={handlePagamentoClick} renderComp={renderComp} setRnderComp={setRnderComp}/>
				</CardCliente>

				<CardCliente>
					<DetalhesCardUser title={"Detalhes de faturação"} desc={"Altere a sua morada de faturação"}/>
					<InfoCardUser nome={usuario.address.street + " "  } desc={usuario.address.zipcode + " " + usuario.address.city} />
					<BotaoCardUser funcRender={handleMoradaClick} renderComp={renderComp} setRnderComp={setRnderComp}/>
				</CardCliente>

				<HisEncomenda></HisEncomenda>
				
				{renderComp.detailsUser ? <EditCliente handleCloseClick={handleCloseClick}></EditCliente> : ""}
				{renderComp.detailsPagamento ? <EditCliente handleCloseClick={handleCloseClick}></EditCliente> : ""}
				{renderComp.detailsMorada ? <EditCliente handleCloseClick={handleCloseClick}></EditCliente> : ""}
			</div>
		);
		
	}
};
 
export default Cliente;