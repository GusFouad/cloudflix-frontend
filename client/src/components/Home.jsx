import React, { Component } from 'react';
class Home extends Component {
	state = {};
	render() {
		return (
			<div>
				<h1>Cloud Flix</h1>
				<h2>Welcome to cloud flix</h2>
				<p>
					First time? <a>Register Here!</a>
				</p>
				<p>then go ahead and search your fav movies and add them to your list!</p>
				<p>
					Already have an account? <a>Login Here!</a>
				</p>
			</div>
		);
	}
}

export default Home;
