import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
const apiEndpoint = process.env.REACT_APP_API_URL + '/user/login';

export async function login(email, password) {
	const { jwt } = await axios.post(apiEndpoint, {
		email,
		password
	});
	localStorage.setItem('token', jwt);
}
export function getUser() {
	try {
		const jwt = localStorage.getItem('token');
		return jwtDecode(jwt);
	} catch (ex) {
		return null;
	}
}
export function loginWithJwt(jwt) {
	localStorage.setItem('token', jwt);
}
export function logout() {
	localStorage.removeItem('token');
}
