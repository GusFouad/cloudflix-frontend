import axios from 'axios';

const apiEndpoint = process.env.REACT_APP_API_URL + '/user/login';

export function login(email, password) {
	return axios.post(apiEndpoint, {
		email,
		password
	});
}
