import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import MovimentoDataService from '../../services/movimento.service';
import ListaMovimentosCei from '../movimentos/ListaMovimentosCei';

const LerMovimentosCei = () => {

  const [arquivo, setArquivo] = useState("");

  const handleInputChange = event => {
    setArquivo(event.target.value);
  }

  const lerArquivo = () => {

    var caminhoArquivo = arquivo.replace("C:\\fakepath\\", '');

    MovimentoDataService.post(caminhoArquivo)
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
                  <Form.Control type='file' placeholder='Informe o nome do arquivo' value={arquivo} onChange={handleInputChange}></Form.Control>
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
      <div><ListaMovimentosCei /></div>
    </div>
  )
}

export default LerMovimentosCei;