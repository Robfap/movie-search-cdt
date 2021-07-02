// Not secure hardcoding on the client. Should be moved to the server side =)
import { mapMovies } from "./helpers";

const API_KEY = "a5825bfc";

class ApiService {
  host = `https://www.omdbapi.com/?apikey=${API_KEY}&`;

  getMovies = (searchPattern) => {
    return fetch(`${this.host}s=${searchPattern}`).then((r) =>
      r.json().then(mapMovies)
    );
  };

  getMovieById = (id) => {
    return fetch(`${this.host}plot=full&i=${id}`).then((r) => r.json());
  };
}

export default new ApiService();
