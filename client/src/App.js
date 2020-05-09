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
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=64882f956a7fd9b8a23485266c2280b6&language=en-US&page=1"
      )
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error("Server Error", error);
      });
  }, []);

  const searchMovies = (e) => {
    console.log(e.target.value);
    const query = e.target.value;
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=64882f956a7fd9b8a23485266c2280b6&language=en-US&query=${query}&page=1&include_adult=false`
      )
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log("Server errror: ", error);
      });
  };

  const addToSavedList = (movie) => {
    const ids = savedList.map((el) => el.id);
    if (!ids.includes(movie.id)) {
      setSavedList([...savedList, movie]);
    }
  };

  const deleteSavedMovie = (id) => {
    return setSavedList(savedList.filter((movie) => movie.id !== id));
  };

  return (
    <div>
      <SavedList list={savedList} deleteSavedMovie={deleteSavedMovie} />
      <Route exact path="/">
        <input
          type="search"
          placeholder="Search movies..."
          onChange={searchMovies}
        />
        <MovieList addToSavedList={addToSavedList} movies={movies} />
      </Route>
      <Route path="/movies/:id">
        <Movie addToSavedList={addToSavedList} />
      </Route>
    </div>
  );
};

export default App;
