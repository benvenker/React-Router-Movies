import React from "react";
import { Link, NavLink } from "react-router-dom";

const SavedList = (props) => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map((movie) => (
      <div>
        <span
          class="delete-button"
          onClick={() => props.deleteSavedMovie(movie.id)}
        >
          X
        </span>

        <NavLink
          key={movie.id}
          to={`/movies/${movie.id}`}
          className="saved-movie"
          activeClassName="saved-active"
        >
          {movie.title}
        </NavLink>
      </div>
    ))}
    <div className="home-button">
      <Link to="/">Home</Link>
    </div>
  </div>
);

export default SavedList;
