import React, { useState } from "react";
import PapelDataService from "../../services/papel.service";
import PapelLista from "./ListaPapel";

const AddPapel = () => {
    const initialPapelState = {
        codAtivo: "",
        codigoNegociacao: "",
        nome: "",
        cnpj: "",
        tipoAtivo: ""
    };

    const [papel, setPapel] = useState(initialPapelState);
    const [papelLista, setPapelLista] = useState([]);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setPapel({ ...papel, [name]: value.toUpperCase() });
    };


    PapelDataService.getAll()
        .then(response => {
            setPapelLista(response.data);
        })
        .catch(e => {
            console.log(e);
        });


    const savePapel = () => {
        var data = {
            codigoNegociacao: papel.codigoNegociacao,
            nome: papel.nome,
            cnpj: papel.cnpj,
            tipoAtivo: papel.tipoAtivo,
        }

        PapelDataService.create(data)
            .then(response => {
                newPapel(response.data);
            })
            .catch(e => {
                console.log(e);
            });

    }

    const newPapel = papel => {
        setPapelLista([...papelLista, papel])
        setPapel(initialPapelState);
    }


    return (
        <div>
            <form>
                <div class="row">
                    <div class="col-auto">
                        <div className="form-group">
                            <label htmlFor="codigoNegociacao">Cód. Negociação:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="codigoNegociacao"
                                required
                                value={papel.codigoNegociacao}
                                onChange={handleInputChange}
                                name="codigoNegociacao"
                            />
                        </div>
                    </div>

                    <div class="col-auto">
                        <div className="form-group">
                            <label htmlFor="nome">Nome:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="nome"
                                required
                                value={papel.nome}
                                onChange={handleInputChange}
                                name="nome"
                            />
                        </div>
                    </div>

                    <div class="col-auto">
                        <div className="form-group">
                            <label htmlFor="cnpj">CNPJ:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="cnpj"
                                value={papel.cnpj}
                                onChange={handleInputChange}
                                name="cnpj"
                            />
                        </div>
                    </div>

                    <div class="col-auto">
                        <div className="form-group">
                            <label htmlFor="tipoAtivo">Tipo Ativo:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="tipoAtivo"
                                value={papel.tipoAtivo}
                                onChange={handleInputChange}
                                name="tipoAtivo"
                            />
                        </div>
                    </div>
                    <div class="col">
                        <div className="form-button">
                            <button onClick={savePapel} className="btn btn-success">
                                Salvar
                            </button>
                        </div>
                    </div>
                </div>
            </form>
            <div><PapelLista papelLista={papelLista} /></div>
        </div>

    );
}

export default AddPapel;