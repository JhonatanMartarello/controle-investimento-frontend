import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProventosDataService from '../../services/proventos.service';
import ListaProventosCei from './ListaProventosCei';

const LerProventosCei = () => {

  const [arquivo, setArquivo] = useState("");

  const handleInputChange = event => {
    setArquivo(event.target.value);
  }

  const lerArquivo = () => {
    ProventosDataService.post(arquivo)
      .then(response => {
        console.log(response.data)
      })
      .catch(e => {
        console.log(e);
      });

  }


  return (
    <div>
      <table>
        <tbody>
      <tr>
        <td>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicNomeArquivo">
              <Form.Label>Nome Arquivo:</Form.Label>
              <Form.Control type='text' placeholder='Informe o nome do arquivo' value={arquivo} onChange={handleInputChange}></Form.Control>
            </Form.Group>
          </Form>
        </td>
      </tr>
      <tr>
        <td>
          <Button variant='primary' type='submit' onClick={lerArquivo}>Ler Arquivo</Button>
        </td>
      </tr>
      </tbody>
      </table>
      <div><ListaProventosCei /></div>
    </div>
  )
}

export default LerProventosCei;