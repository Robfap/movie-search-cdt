import "./MoviePage.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ApiService from "../../services/api.service.js";

function MoviePage() {
  let { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    ApiService.getMovieById(id).then((m) => setMovie(m));
  }, [id]);

  const { Poster, Title, Year, Actors, Plot, Director, imdbRating, Genre } =
    movie;

  return (
    <section className="movie-page">
      {movie.Title && (
        <>
          <div className="movie-page__poster-wrapper">
            <img alt="" className="movie-page__poster" src={Poster} />
          </div>
          <article className="movie-page__info">
            <h2>
              {Title} ({Year})
            </h2>
            <p>Genre: {Genre}</p>
            <p>Director: {Director}</p>
            <p>Actors: {Actors}</p>
            <p>{Plot}</p>
            <p>Rating: {imdbRating}</p>
          </article>
        </>
      )}
    </section>
  );
}

export default MoviePage;
