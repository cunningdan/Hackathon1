const base = window.location.host.includes('localhost') ? '//localhost:3000/' : '/';

export const api = axios.create({
	baseURL         : base + 'api/',
	timeout         : 15000,
	withCredentials : true
});
