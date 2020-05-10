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
  return axios(config.movieIdApi + "268" + config.apiKey);
}
export function deleteMovie(movieId) {}
