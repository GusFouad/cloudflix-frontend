import axios from 'axios';

const apiEndpoint = process.env.REACT_APP_API_URL + '/register';

export function register(user) {
	return axios.post(apiEndpoint, {
		email: user.email,
		name: user.name,
		password: user.password
	});
}
