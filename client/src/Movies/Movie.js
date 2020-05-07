import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MovieCard from "./MovieCard";
import Loader from "react-loader-spinner";

const Movie = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const movieMatch = props.match;
  const [movie, setMovie] = useState();
  const params = useParams();

  useEffect(() => {
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

    axios
      .get(`http://localhost:5000/api/movies/${params.id}`)
      .then((response) => {
        setMovie(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [movie]);

  // Uncomment this only when you have moved on to the stretch goals
  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie);
  };

  if (!movie) {
    return (
      <Loader
        styles={{
          display: "block",
          top: "50%",
          left: "50%",
          marginLeft: "auto",
          marginRight: "auto",
          width: "50%",
          padding: 10,
        }}
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000}
      />
    );
  }

  const { title, director, metascore, stars } = movie;
  return (
    <div>
      <MovieCard
        title={title}
        director={director}
        metascore={metascore}
        stars={stars}
        saveMovie={saveMovie}
        match={movieMatch}
      />
    </div>
  );
};

export default Movie;
