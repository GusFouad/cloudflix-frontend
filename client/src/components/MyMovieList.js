import React, { Component } from 'react';
import config from '../config.json';
import { getMovies } from '../services/movieService';
import MoviesTable from './MoviesTable';
import axios from 'axios';
class MovieList extends Component {
	state = {
		movies: []
	};

	async componentDidMount() {
		let movieData = [];
		const { data } = await getMovies();
		const movies = await Promise.all(
			data.map((id) => {
				const promise = axios(config.movieIdApi + id.movieId + config.apiKey).then(({ data }) => {
					movieData.push(data);
					this.setState({ movies: movieData }, () => console.log('completed'));
				});
				return promise;
			})
		);
	}
	handleDelete = async (movie) => {
		await axios.delete(process.env.REACT_APP_API_URL + '/movies/' + movie.id, {
			headers: {
				Authorization: window.localStorage.getItem('token')
			}
		});

		const originalMovies = this.state.movies;
		const movies = originalMovies.filter((m) => m.id !== movie.id);
		this.setState({ movies });
	};
	render() {
		const { length: count } = this.state.movies;
		const { movies } = this.state;

		if (count === 0) return <p>There are no movies on your watchlist </p>;
		return (
			<React.Fragment>
				<p>You have {count} movies on your watchlist</p>
				<MoviesTable movies={movies} onDelete={this.handleDelete} poster={movies.poster} />
			</React.Fragment>
		);
	}
}

export default MovieList;
