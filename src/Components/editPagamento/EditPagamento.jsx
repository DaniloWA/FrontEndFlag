import React from "react";
import "./EditPagamento.css";

const EditPagamento = () => {
	return (
		<>
			<div className="EditPagamento">
				<div className="EditPagamento_radio">
					<div className="EditPagamento_Choice">
						<input type="radio" id="PagamentoChoice1" name="Pagamento" value="email"/>
						<label htmlFor="PagamentoChoice1">Multibanco</label>
					</div>

					<div className="EditPagamento_Choice">
						<input type="radio" id="PagamentoChoice2" name="Pagamento" value="telephone"/>
						<label htmlFor="PagamentoChoice2">MBWAY</label>
					</div>

					<div className="EditPagamento_Choice">
						<input type="radio" id="PagamentoChoice3" name="Pagamento" value="courrier"/>
						<label htmlFor="PagamentoChoice3">Cartão de Crédito</label>
					</div>

					<div className="EditPagamento_Choice">
						<input type="radio" id="PagamentoChoice4" name="Pagamento" value="courrier"/>
						<label htmlFor="PagamentoChoice3">PayShop</label>
					</div>
				</div>
			</div>
		</>
	);
};

export default EditPagamento;


/*
    display: flex;
    align-items: center;

*/