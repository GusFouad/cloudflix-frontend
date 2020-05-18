import React, { Component } from 'react';
class Home extends Component {
	state = {};
	render() {
		return (
			<div className="home">
				<h1>CloudFlix</h1>
				<h2>Welcome to cloud flix</h2>
				<h3>Go ahead and search your fav movies and add them to your list!</h3>
				<p>
					First time? <a href="/register">Register Here!</a>
				</p>
				<p>
					Already have an account? <a href="/login">Login Here!</a>
				</p>
			</div>
		);
	}
}

export default Home;
