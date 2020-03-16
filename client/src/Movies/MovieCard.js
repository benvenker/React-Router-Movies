import React from "react";

const MovieCard = props => {
  const {
    title,
    director,
    metascore,
    stars,
    saveMovie,
    movieMatch,
    match
  } = props;
  console.log("MovieCard props", props);
  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      {match !== undefined ? (
        <div onClick={saveMovie} className="save-button">
          Save
        </div>
      ) : null}
    </div>
  );
};

export default MovieCard;
