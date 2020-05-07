import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

const MovieList = (props) => {
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
  const { title, director, metascore, stars, id, saveMovie, match } = movie;
  return (
    <Link to={`/movies/${id}`}>
      <MovieCard
        title={title}
        director={director}
        metascore={metascore}
        stars={stars}
        id={id}
        saveMovie={saveMovie}
        match={match}
      />
    </Link>
  );
}

export default MovieList;
