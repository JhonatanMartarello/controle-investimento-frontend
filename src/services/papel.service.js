import http from "../httpCommon";

class PapelDataService {
  getAll() {
    return http.get("/ativo/listar");
  }

  get(id) {
    return http.get(`/ativo/buscar/${id}`);
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

export default new PapelDataService();