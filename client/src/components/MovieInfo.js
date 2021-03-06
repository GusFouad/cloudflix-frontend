import React from 'react';
import axios from 'axios';
import { getUser } from '../services/authService';
const MovieInfo = ({ closeMovieInfo, currentMovie, onClickAdd }) => {
	onClickAdd = async () => {
		const user = getUser();
		const movie = {
			movieId: currentMovie.id
		};

		await axios
			.post(process.env.REACT_APP_API_URL + '/movies/add', movie, {
				headers: {
					Authorization: window.localStorage.getItem('token')
				}
			})
			.then((r) => console.log(r, 'Successfully added to your watchlist', 'THIS IS USER', user));
	};

	return (
		<div className="container">
			<div className="row" onClick={closeMovieInfo} style={{ cursor: 'pointer', paddingTop: 50 }}>
				<i className="fas fa-arrow-left"> Back</i>
				<span />
			</div>
			<div className="row">
				<div className="col s12 m4">
					{currentMovie.poster_path === null ? (
						<img
							className="movie-info-image"
							src={'https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image/jpg'}
							alt="card"
						/>
					) : (
						<img
							className="movie-info-image"
							src={`http://image.tmdb.org/t/p/w185${currentMovie.poster_path}`}
							alt="card"
						/>
					)}
				</div>

				<div className="col s12 m8">
					<div className="info-container">
						<p>{currentMovie.title}</p>
						<p>{currentMovie.release_date}</p>
						<p>{currentMovie.overview}</p>
					</div>
					<button onClick={onClickAdd}>Add To Watch List</button>
				</div>
			</div>
		</div>
	);
};

export default MovieInfo;
