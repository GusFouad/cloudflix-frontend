import axios from "axios";
import config from "../config.json";
export function getMovies() {
  return axios.get("http://localhost:5000/movies/list", {
    headers: {
      Authorization: window.localStorage.getItem("token"),
    },
  });
}
export async function getMovieId() {
  return axios(
    process.env.REACT_APP_MOVIE_ID_API + "268" + process.env.REACT_APP_API_KEY
  );
}
export function deleteMovie(movieId) {}
