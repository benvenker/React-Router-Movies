import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

const MovieList = (props) => {
  console.log("movies: ", props.movies);
  return (
    <div className="movie-list">
      {props.movies.map((movie, i) => (
        <MovieDetails
          key={i}
          movie={movie}
          addToSavedList={props.addToSavedList}
        />
      ))}
    </div>
  );
};

function MovieDetails({ movie }) {
  // const saveMovie = () => {
  //   const addToSavedList = addToSavedList;
  //   addToSavedList(movie);
  // };
  const { title, director, popularity, overview, id, saveMovie } = movie;
  return (
    <Link to={`/movies/${id}`}>
      <MovieCard
        title={title}
        director={director}
        popularity={popularity}
        overview={overview}
        id={id}
        saveMovie={saveMovie}
      />
    </Link>
  );
}

export default MovieList;
