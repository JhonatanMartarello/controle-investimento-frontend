import React, {useEffect, useState} from 'react'
import ProventosService from '../../services/proventos.service';
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import UIMoeda from '../utils/UIMoeda';

const ListaProventosCei = () => {
    const [proventosLista, setProventosLista] = useState([]);

    useEffect(() => {
        retrieveProventos();
    }, []);

    const retrieveProventos = () => {
        ProventosService.getAll()
            .then(response => {
                setProventosLista(response.data);
            })
            .catch(e => {
                console.log(e);
            })
    }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Código Proventos</th>
          <th>Papel</th>
          <th>Data</th>
          <th>Tipo Movimentação</th>
          <th>Preço Unitário</th>
          <th>Quantidade</th>
          <th>Valor Operação</th>
          
        </tr>
      </thead>
      <tbody>
        {proventosLista.map(proventos => (
          <tr key={proventos.codProventos}>
            <td>{proventos.codProventos}</td>
            <td>{proventos.papel}</td>
            <td>{proventos.data}</td>
            <td>{proventos.tipoMovimentacao}</td>
            <td><UIMoeda>{proventos.precoUnitario}</UIMoeda></td>
            <td>{proventos.quantidade}</td>
            <td><UIMoeda>{proventos.valorOperacao}</UIMoeda></td>
            
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default ListaProventosCei;