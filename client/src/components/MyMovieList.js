import React, { Component } from "react";
import config from "../config.json";
import { getMovies, getMovieId } from "../services/movieService";
import MoviesTable from "./MoviesTable";
import axios from "axios";
class MovieList extends Component {
  state = {
    movies: [],
  };

  // const movies = await Promise.all(
  //   data.map(item => { // You are using curly brackets. You must return a value.
  //     const promise = axios(/* code in here */)
  //     // do things
  //     return promise
  //   })
  // )
  async componentDidMount() {
    let movieData = [];

    const { data } = await getMovies();
    const movies = await Promise.all(
      data.map((id) => {
        const promise = axios(
          config.movieIdApi + id.movieId + config.apiKey
        ).then(({ data }) => {
          movieData.push(data);
          this.setState({ movies: movieData }, () =>
            console.log("completed", this.state.movies)
          );
        });
        return promise;
      })
    );
    console.log("FINAL", this.state.movies);
  }
  handleDelete = async (movie) => {
    const originalMovies = this.state.movies;
    const movies = originalMovies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
    await axios.delete("http://localhost:5000/movies/delete/" + movie._id);
  };
  render() {
    const { length: count } = this.state.movies;
    const { movies } = this.state;

    if (count === 0) return <p>There are no movies on your watchlist </p>;
    return (
      <React.Fragment>
        <p>You have {count} movies on your watchlist</p>
        <MoviesTable
          movies={movies}
          onDelete={this.handleDelete}
          poster={movies.poster}
        />
      </React.Fragment>
    );
  }
}

export default MovieList;
