import React, { useState } from "react";
import CardCliente from "../../Components/cardCliente/CardCliente";
import DetalhesCardUser from "../../Components/cardCliente/detalhesCardUser/DetalhesCardUser";
import InfoCardUser from "../../Components/cardCliente/infoCardUser/InfoCardUser";
import BotaoCardUser from "../../Components/cardCliente/botaoCardUser/BotaoCardUser";
import { useData } from "../../Services/pageContextProvider";
import TitleBackImgUser from "../../Components/titleBackImgUser/TitleBackImgUser";
// eslint-disable-next-line no-unused-vars
import EditCliente from "../../Components/editCliente/EditCliente";

const Cliente = () => {
	const {user} = useData();

	const [usuario] = useState(typeof user.currentUser == "string" ? JSON.parse(user.currentUser) : user.currentUser);
	const [renderComp, setRnderComp] = useState(false);

	function handleUserClick(){
		if(!renderComp){
			setRnderComp(true);
		}
	}

	function handleCloseClick(){
		if(renderComp){
			setRnderComp(false);
		}
	}

	function handlePagamentorClick(){
		console.log("Pagamento");
	}

	function handleFaturaClick(){
		console.log("Fatura");
	}

	if(usuario.name === "anonymous" || usuario.name.firstname == undefined){
		return(
			<CardCliente>
				<DetalhesCardUser title={"Usuario Anonymo"} desc={"Você tem que estar Logado para ver o conteudo dessa pagina"}/>
			</CardCliente>
		);
	}else if (usuario.name != "anonymous" && usuario.name.firstname != undefined == true){
		return ( 
			<div id="Cliente_Page">
				<TitleBackImgUser></TitleBackImgUser>
				<CardCliente>
					<DetalhesCardUser title={"Detalhes de conta"} desc={"Altere os detalhes da sua conta e a morada de entrega"}/>
					<InfoCardUser nome={usuario.name.firstname + " " + usuario.name.lastname} desc={"Não existem detalhes de entrega"} />
					<BotaoCardUser funcRender={handleUserClick} handleCloseClick={handleCloseClick} renderComp={renderComp} setRnderComp={setRnderComp}/>
				</CardCliente>

				<CardCliente>
					<DetalhesCardUser title={"Detalhes de pagamento"} desc={"Altere os seus cartões e métodos de pagamento"}/>
					<InfoCardUser nome={usuario.name.firstname + " " + usuario.name.lastname} desc={"Não existem detalhes de entrega"} />
					<BotaoCardUser funcRender={handlePagamentorClick} renderComp={renderComp} setRnderComp={setRnderComp}/>
				</CardCliente>

				<CardCliente>
					<DetalhesCardUser title={"Detalhes de faturação"} desc={"Altere a sua morada de faturação"}/>
					<InfoCardUser nome={usuario.address.street + " "  } desc={usuario.address.zipcode + " " + usuario.address.city} />
					<BotaoCardUser funcRender={handleFaturaClick} renderComp={renderComp} setRnderComp={setRnderComp}/>
				</CardCliente>
				{renderComp ? <EditCliente handleCloseClick={handleCloseClick}></EditCliente> : ""}
			</div>
		);
		
	}
};
 
export default Cliente;