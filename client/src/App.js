import React, { useState, useEffect } from "react";
import axios from "axios";
import SavedList from "./Movies/SavedList";
import { Route } from "react-router-dom";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies = () => {
      axios
        .get("http://localhost:5000/api/movies")
        .then((response) => {
          setMovies(response.data);
        })
        .catch((error) => {
          console.error("Server Error", error);
        });
    };

    getMovies();
  }, []);

  const addToSavedList = (movie) => {
    const ids = savedList.map((el) => el.id);
    if (!ids.includes(movie.id)) {
      setSavedList([...savedList, movie]);
    }
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/">
        <MovieList addToSavedList={addToSavedList} movies={movies} />
      </Route>
      <Route path="/movies/:id">
        <Movie addToSavedList={addToSavedList} />
      </Route>
    </div>
  );
};

export default App;
