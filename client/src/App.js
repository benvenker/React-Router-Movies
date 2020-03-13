import React, { useState } from "react";

import SavedList from "./Movies/SavedList";
import { Route } from "react-router-dom";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route
        exact
        path="/"
        // component={MovieList}
        // addToSavedList={addToSavedList}
        render={props => (
          <MovieList {...props} addToSavedList={addToSavedList} />
        )}
      />
      <Route
        path="/movies/:id"
        render={props => <Movie {...props} addToSavedList={addToSavedList} />}
        // component={Movie}
        // addToSavedList={addToSavedList}
      />
    </div>
  );
};

export default App;
