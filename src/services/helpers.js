export const mapMovies = (respMovies) => {
  if (respMovies?.Response !== "True") {
    return {
      error: respMovies?.Error ?? "Unexpected error. Please try again later.",
      movies: [],
    };
  }

  return {
    movies: respMovies.Search ?? [],
    error: "",
  };
};
