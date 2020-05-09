import React from "react";
import "./MovieCard.css";
import { useParams } from "react-router-dom";

const MovieCard = (props) => {
  const params = useParams();

  const { title, popularity, overview, saveMovie } = props;
  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        {/* <div className="movie-director">
          Director: <em>{director}</em>
        </div> */}
        <div className="movie-metascore">
          Popularity: <strong>{popularity}</strong>
        </div>
        <div className="">
          Overview:
          <p>{overview}</p>
        </div>
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
