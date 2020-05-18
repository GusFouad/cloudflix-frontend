import axios from 'axios';
import jwtDecode from 'jwt-decode';

const apiEndpoint = process.env.REACT_APP_API_URL + '/user/login';

export function login(email, password) {
	return axios.post(apiEndpoint, {
		email,
		password
	});
}
export function getUser() {
	try {
		const jwt = localStorage.getItem('token');
		const user = jwtDecode(jwt);
		return user;
	} catch (ex) {
		return null;
	}
}
