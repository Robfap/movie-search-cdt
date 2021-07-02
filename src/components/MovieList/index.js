import "./MovieList.scss";
import MovieCard from "../MovieCard";

const MovieList = ({ movies, error }) => {
  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} data={movie} />
      ))}
    </div>
  );
};

export default MovieList;
