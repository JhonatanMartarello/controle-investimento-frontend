import http from "../httpCommon";

class MovimentoDataService {
  getAll() {
    return http.get("/movimento-cei/listar");
  }

  post(nomeArquivo) {
    return http.post(`/movimento-cei/ler/${nomeArquivo}`);
  }

  get(nomeArquivo) {
    return http.get(`/movimento-cei/ler/${nomeArquivo}`);
  }

//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }

//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}

export default new MovimentoDataService();