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
	const [usuario] = useState(typeof user.currentUser == "string" ?  user.currentUser == "anonymous" ? user.currentUser : JSON.parse(user.currentUser) : user.currentUser);
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
				<DetalhesCardUser title={"Usuario Anonymo"} desc={"Você tem que estar Logado para ver o conteudo dessa pagina"}/>
			</CardCliente>
		);
	}else if (usuario.name && usuario.name != "anonymous" && usuario.name.firstname){
		return ( 
			<div className="Cliente">
				<TitleBackImgUser tituloBackImgUser="Conta"></TitleBackImgUser>
				<CardCliente>
					<DetalhesCardUser title={"Detalhes de conta"} desc={"Altere os detalhes da sua conta e a morada de entrega"}/>
					<InfoCardUser nome={usuario.name.firstname + " " + usuario.name.lastname} desc={"Não existem detalhes de entrega"} />
					<BotaoCardUser funcRender={handleUserClick} handleCloseClick={handleCloseClick} renderComp={renderComp} setRnderComp={setRnderComp}/>
				</CardCliente>

				<CardCliente>
					<DetalhesCardUser title={"Detalhes de pagamento"} desc={"Altere os seus cartões e métodos de pagamento"}/>
					<InfoCardUser nome={"As referências de pagamento serão geradas "} desc={"durante o processo de checkout."} />
					<BotaoCardUser funcRender={handlePagamentoClick} renderComp={renderComp} setRnderComp={setRnderComp}/>
				</CardCliente>

				<CardCliente>
					<DetalhesCardUser title={"Detalhes de faturação"} desc={"Altere a sua morada de faturação"}/>
					<InfoCardUser nome={usuario.address.street + " "  } desc={usuario.address.zipcode + " " + usuario.address.city} />
					<BotaoCardUser funcRender={handleMoradaClick} renderComp={renderComp} setRnderComp={setRnderComp}/>
				</CardCliente>

				<HisEncomenda></HisEncomenda>
				
				{renderComp.detailsUser ? <CardEditUser title={"Detalhes de conta"} handleCloseClick={handleCloseClick}><EditCliente ></EditCliente></CardEditUser>: ""}
				{renderComp.detailsPagamento ? <CardEditUser title={"Detalhes de pagamento"} handleCloseClick={handleCloseClick}><EditPagamento ></EditPagamento></CardEditUser>: ""}
				{renderComp.detailsMorada ? <CardEditUser title={"Detalhes de faturação"} handleCloseClick={handleCloseClick}><EditCliente ></EditCliente></CardEditUser> : ""}
			</div>
		);
		
	}
};
 
export default Cliente;