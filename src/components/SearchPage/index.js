import "./SearchPage.scss";
import Search from "../Search";
import { useCallback, useState } from "react";
import ApiService from "../../services/api.service.js";
import MovieList from "../MovieList";

function SearchPage() {
  const [error, setError] = useState("");
  const [movies, setMovies] = useState([]);
  const sendQuery = useCallback((q) => {
    ApiService.getMovies(q).then(({ movies, error }) => {
      setError(error);
      setMovies(movies);
    });
  }, []);

  return (
    <section className="search-page">
      <div className="search-wrapper">
        <Search placeholder="Search by name" delay={500} onSearch={sendQuery} />
      </div>
      <MovieList movies={movies} error={error} />
    </section>
  );
}

export default SearchPage;
