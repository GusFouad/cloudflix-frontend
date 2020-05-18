import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { getUser } from './services/authService';
import NavBar from './components/navBar';
import MyMovieList from './components/MyMovieList';
import LoginForm from './components/loginForm';
import Logout from './components/logoutForm';
import Search from './components/search';
import RegisterForm from './components/registerform';
import Home from './components/Home';

class App extends Component {
	state = {};

	componentDidMount() {
		const user = getUser();
		this.setState({ user });
	}
	render() {
		const { user } = this.state;
		return (
			<React.Fragment>
				<NavBar user={user} />
				<main className="container">
					<Switch>
						<Route path="/mylist" component={MyMovieList} />
						<Route path="/logout" component={Logout} />
						<Route path="/login" component={LoginForm} />
						<Route path="/register" component={RegisterForm} />
						<Route path="/search" component={Search} />
						<Route path="/" component={Home} />
					</Switch>
				</main>
			</React.Fragment>
		);
	}
}

export default App;
