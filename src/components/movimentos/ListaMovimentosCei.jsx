import React, { useEffect, useState } from 'react'
import MovimentosService from '../../services/movimento.service';
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import UIMoeda from '../utils/UIMoeda';

const ListaMovimentosCei = () => {
    const [movimentoLista, setMovimentoLista] = useState([]);

    useEffect(() => {
        retrieveMovimentos();
    }, []);

    const retrieveMovimentos = () => {
        MovimentosService.getAll()
            .then(response => {
                setMovimentoLista(response.data);
            })
            .catch(e => {
                console.log(e);
            })
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Entrada/Saída</th>
                    <th>Data</th>
                    <th>Movimentação</th>
                    <th>Produto</th>
                    <th>Quantidade</th>
                    <th>Preço Unitário</th>
                    <th>Valor da Operação</th>

                </tr>
            </thead>
            <tbody>
                {movimentoLista.map(movimentos => (
                    <tr key={movimentos.codMovimentoCei}>
                        <td>{movimentos.entradaSaida}</td>
                        <td>{movimentos.data}</td>
                        <td>{movimentos.movimentacao}</td>
                        <td>{movimentos.produto}</td>
                        <td>{movimentos.quantidade}</td>
                        <td><UIMoeda>{movimentos.precoUnitario}</UIMoeda></td>
                        <td><UIMoeda>{movimentos.valorOperacao}</UIMoeda></td>

                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default ListaMovimentosCei;