import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burguer-66a5b.firebaseio.com/'
});

export default instance;
