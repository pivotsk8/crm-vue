import api from '../lib/axios';

export default {
  obternerClientes() {
    return api.get('/clientes');
  },
  agregarCliente(data) {
    return api.post('/clientes', data);
  },
  obternerCliente(id) {
    return api.get(`/clientes/${id}`);
  },
  editarCliente(id, data) {
    return api.patch(`/clientes/${id}`, data);
  },
  cambiarEstado(id, estado) {
    return api.patch(`/clientes/${id}`, estado);
  },
  eliminarCliente(id) {
    return api.delete(`/clientes/${id}`);
  },
};
