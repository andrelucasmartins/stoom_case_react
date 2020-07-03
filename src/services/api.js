import axios from  'axios'
axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
const api = axios.create({ baseURL: 'https://localhost/3001'})

export default api