import React, { useState } from "react";
import PapelDataService from "../../services/papel.service";
import PapelLista from "./ListaPapel";

const AddPapel = () => {
    const initialPapelState = {
        codAtivo: null,
        codigoNegociacao: "",
        nome: "",
        cnpj: null,
        tipoAtivo: "",
        published: false
    };

    const [papel, setPapel] = useState(initialPapelState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setPapel({ ...papel, [name]: value });
    };

    const savePapel = () => {
        var data = {
            codigoNegociacao: papel.codigoNegociacao,
            nome: papel.nome,
            cnpj: papel.cnpj,
            tipoAtivo: papel.tipoAtivo,
        }

        PapelDataService.create(data)
            .then(response => {
                setPapel({
                    codAtivo: response.data.codAtivo,
                    codigoNegociacao: response.data.codigoNegociacao,
                    nome: response.data.nome,
                    cnpj: response.data.cnpj,
                    tipoAtivo: response.data.tipoAtivo,
                    published: response.data.published
                });
                setSubmitted(true);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });

    }

    const newPapel = () => {
        setPapel(initialPapelState);
        setSubmitted(false);
    }


    return (
        <div>
            <div className="submit-form">
                {submitted ? (
                    <div>
                        <h4>You submitted successfully!</h4>
                        <button className="btn btn-success" onClick={newPapel}>
                            Add
                        </button>
                    </div>
                ) : (
                    <div>
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
                        <div className="form-group">
                            <label htmlFor="cnpj">CNPJ:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="cnpj"
                                required
                                value={papel.cnpj}
                                onChange={handleInputChange}
                                name="cnpj"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="tipoAtivo">Tipo Ativo:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="tipoAtivo"
                                required
                                value={papel.tipoAtivo}
                                onChange={handleInputChange}
                                name="tipoAtivo"
                            />
                        </div>

                        <button onClick={savePapel} className="btn btn-success">
                            Adicionar
                        </button>
                    </div>
                )}

            </div>
            <div><PapelLista/></div>
        </div>

    );
}

export default AddPapel;