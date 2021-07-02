import "./MovieCard.scss";
import { Link } from "react-router-dom";

const MovieCard = ({ data: { Title, Year, imdbID, Poster } }) => {
  return (
    <Link className="movie-link" to={`movie/${imdbID}`}>
      <article className="movie-card">
        <div className="movie-card__poster-wrapper">
          <img className="movie-card__poster" alt="" src={Poster} />
        </div>
        <div className="movie-card__info">
          {Title} ({Year})
        </div>
      </article>
    </Link>
  );
};

export default MovieCard;
