import axios from 'axios';

// para evitar de craer varias instancias de axios en cada componente
const api = axios.create({
  baseURL: 'http://localhost:4000',
});

export default api;
