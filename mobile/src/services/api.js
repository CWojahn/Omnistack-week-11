import axios from 'axios';

const api = axios.create({
	baseURL: 'https://be-the-hero-panambi.herokuapp.com',
});

export default api;
