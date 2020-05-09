import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MovieCard from "./MovieCard";
import Loader from "react-loader-spinner";

const Movie = (props) => {
  const [movie, setMovie] = useState();
  const params = useParams();

  useEffect(() => {
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

    axios
      .get(`http://localhost:5000/api/movies/${params.id}`)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [movie, params]);

  // Uncomment this only when you have moved on to the stretch goals
  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie);
  };

  if (!movie) {
    return (
      <div
        styles={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
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
      </div>
    );
  }

  const { title, director, metascore, stars } = movie;
  const { deleteSavedMovie } = props;
  return (
    <div>
      {movie ? (
        <MovieCard
          title={title}
          director={director}
          metascore={metascore}
          stars={stars}
          saveMovie={saveMovie}
          deleteSavedMovie={deleteSavedMovie}
        />
      ) : (
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
      )}
    </div>
  );
};

export default Movie;
