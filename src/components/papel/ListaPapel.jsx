import React, { useState, useEffect } from 'react'
import PapelService from '../../services/papel.service';
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';

const PapelLista = () => {
    const [papelLista, setPapelLista] = useState([]);
  
    useEffect(() => {
      retrievePapel();
    }, []);
  
    const retrievePapel = () => {
      PapelService.getAll()
        .then(response => {
          setPapelLista(response.data);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  
  
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Código Ativo</th>
            <th>Código Negociação</th>
            <th>Nome</th>
            <th>CNPJ</th>
            <th>Tipo Ativo</th>
          </tr>
        </thead>
        <tbody>
          {papelLista.map(papel => (
            <tr key={papel.codAtivo}>
              <td>{papel.codAtivo}</td>
              <td>{papel.codigoNegociacao}</td>
              <td>{papel.nome}</td>
              <td>{papel.cnpj}</td>
              <td>{papel.tipoAtivo}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }

  export default PapelLista;