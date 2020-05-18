import React, { Component } from 'react';
import axios from 'axios';
import MovieList from './MovieList';
class Home extends Component {
	state = { movies: [] };
	async componentDidMount() {
		let movieData = [];
		await axios(
			'https://api.themoviedb.org/3/movie/now_playing?api_key=ed1b18e9826bd1190664c17b9c51cd83'
		).then(({ data }) => {
			movieData.push(data.results);
			this.setState({ movies: [ ...movieData ] });
			console.log(data, data.results[0].poster_path, this.state.movies.poster, 'THIS IS DATA');
		});
	}
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
				<div>
					{this.state.movies.map((movie, i) => {
						console.log('FIGURING MOVIE OUT ', movie);
						return <img src={`http://image.tmdb.org/t/p/w185${movie[0].poster_path}`} />;
					})}
				</div>
			</div>
		);
	}
}

export default Home;
