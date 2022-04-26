import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';

const PapelLista = (props) => {
    const papelLista = props.papelLista;
  
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Código Ativo</th>
            <th>Código Negociação</th>
            <th>Nome</th>
            <th>CNPJ</th>
            <th>Tipo Ativo</th>
            <th>Alterar</th>
            <th>Excluir</th>
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
              <td><button className="btn btn-primary"/></td>
              <td><button className="btn btn-danger"/></td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }

  export default PapelLista;