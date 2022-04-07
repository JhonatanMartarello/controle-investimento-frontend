import http from "../httpCommon";

class ProventosDataService {
  getAll() {
    return http.get("/proventos/listar");
  }

  post(nomeArquivo) {
    return http.post(`/proventos/ler/${nomeArquivo}`);
  }

  get(nomeArquivo) {
    return http.get(`/proventos/ler/${nomeArquivo}`);
  }

  create(data) {
    return http.post("/ativo/incluir", data);
  }

  update(id, data) {
    return http.put(`/ativo/alterar/${id}`, data);
  }

  delete(id) {
    return http.delete(`ativo/deletar/${id}`);
  }

//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }

//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}

export default new ProventosDataService();