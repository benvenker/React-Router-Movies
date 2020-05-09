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
      .get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=64882f956a7fd9b8a23485266c2280b6&language=en-US
`
      )
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [params.id]);

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
            display: "inline-block",
            top: "50%",
            left: "50%",
            marginLeft: "auto",
            marginRight: "auto",
            width: "50%",
            padding: 10,
            position: "absolute",
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

  const { title, director, popularity, overview } = movie;
  const { deleteSavedMovie } = props;
  return (
    <div>
      {movie ? (
        <MovieCard
          title={title}
          director={director}
          popularity={popularity}
          overview={overview}
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
