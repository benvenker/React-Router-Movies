import React from "react";
import "./MovieCard.css";
import { useParams } from "react-router-dom";

const MovieCard = (props) => {
  const params = useParams();

  const { title, director, metascore, stars, saveMovie } = props;
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

        {stars.map((star) => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      {params.id >= 0 ? (
        <div onClick={saveMovie} className="save-button">
          Save
        </div>
      ) : null}
    </div>
  );
};

export default MovieCard;
