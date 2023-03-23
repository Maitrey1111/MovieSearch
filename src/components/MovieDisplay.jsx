import { React, useEffect, useState } from "react";
import axios from "axios";

import MovieCard from "./MovieCard.jsx";
import "../static/MovieDisplay.css";

function MovieDisplay({ searchQuery, rating, genre, releaseYear }) {
  const [movieData, setMovieData] = useState([]);
  const [searchedMov, setSearchedMov] = useState([]);

  const popularData = { heading: "Popular Movies" };
  const searchedData = { heading: "Your Search Results" };

  //popular movies are shown
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key="+ process.env.REACT_APP_TMDB_API_KEY
      )
      .then((resp) => {
        const data = resp.data.results;
        setMovieData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (searchQuery) {
      axios
        .get(
          "https://api.themoviedb.org/3/search/movie?api_key=" +
            process.env.REACT_APP_TMDB_API_KEY +
            "&language=en-US&query=" +
            searchQuery +
            "&include_adult=false"
        )
        .then((resp) => {
          const data = resp.data.results;
          if (data) setSearchedMov(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [searchQuery]);

  const isValid = (array) => {
    if (array.length > 0 && searchQuery) {
      var count1 = 0;
      var count2 = 0;
      array.forEach((e) => {
        if (e.poster_path) count1 += 1;
      });
      array.forEach((e) => {
        if (e.title) count2 += 1;
      });
      if (count1 > 0 && count2 > 0) {
        return true;
      }
    }
    return false;
  };

  const display = (selectedData, metadata) => {
    var displayData = [];
    selectedData.forEach((movie) => {
      if (movie.title && movie.poster_path && movie.overview) {
        var flag = true;
        if (genre || rating || releaseYear) {
          if (genre) {
            if (!movie.genre_ids.includes(genre)) flag = false;
          }
          if (rating) {
            if (!(movie.vote_average / 2 >= rating)) flag = false;
          }
          if (releaseYear) {
            if (!(movie.release_date.split("-")[0] >= releaseYear))
              flag = false;
          }

          if (flag) displayData.push(movie);
        } else {
          displayData.push(movie);
        }
      }
    });

    if (genre || releaseYear || rating) {
      if (displayData.length > 0) {
        return (
          <div className="movieflex">
            {displayData.map((movie, i) => {
              return (
                <div key={i}>
                  <MovieCard
                    posterPath={movie.poster_path}
                    title={movie.title}
                    date={movie.release_date}
                    description={movie.overview}
                    rating={movie.vote_average / 2}
                    movieId={movie.id}
                  />
                </div>
              );
            })}
          </div>
        );
      } else {
        return (
          <h3 style={{ textAlign: "center", paddingBottom: "2vh" }}>
            {"<"} Results not Found {">"}
          </h3>
        );
      }
    } else {
      if (displayData.length > 0) {
        return (
          <div>
            <h3 style={{ fontSize: "1.5rem" }}>{metadata.heading}</h3>
            <div className="movieflex">
              {displayData.map((movie, i) => {
                return (
                  <div key={i}>
                    <MovieCard
                      posterPath={movie.poster_path}
                      title={movie.title}
                      date={movie.release_date}
                      description={movie.overview}
                      rating={movie.vote_average / 2}
                      movieId={movie.id}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        );
      } else {
        return (
          <h3 style={{ textAlign: "center" }}>
            {"<"} Results not Found {">"}
          </h3>
        );
      }
    }
  };

  return (
    <div className="moviesholder">
      {isValid(searchedMov)
        ? display(searchedMov, searchedData)
        : display(movieData, popularData)}
    </div>
  );
}

export default MovieDisplay;
