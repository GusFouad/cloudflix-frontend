import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { getUser } from '../src/services/authService';
import NavBar from './components/navBar';
import MyMovieList from './components/MyMovieList';
import LoginForm from './components/loginForm';
import Logout from './components/logoutForm';
import Search from './components/search';
import RegisterForm from './components/registerform';

class App extends Component {
	state = {};

	componentDidMount() {
		const user = getUser();
		this.setState = { user };
	}
	render() {
		const { user } = this.state;
		return (
			<React.Fragment>
				<NavBar user={user} />
				<main className="container">
					<Route path="/mylist" component={MyMovieList} />
					<Route path="/login" component={LoginForm} />
					<Route path="/logout" component={Logout} />
					<Route path="/search" render={(props) => <Search {...props} user={user} />} />
					<Route path="/register" component={RegisterForm} />
				</main>
			</React.Fragment>
		);
	}
}

export default App;
