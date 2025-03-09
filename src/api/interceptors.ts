import axios, { type CreateAxiosDefaults } from 'axios';

const options: CreateAxiosDefaults = {
	baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3100',
	headers: {
		'Content-Type': 'application/json',
	},
};

const axiosClassic = axios.create(options);

export { axiosClassic };
