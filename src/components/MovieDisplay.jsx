import { React, useEffect, useState } from "react";
import axios from "axios";

import MovieCard from "./MovieCard";
import "../static/MovieDisplay.css";

function MovieDisplay({ movieData, searchQuery, rating, genre, releaseYear }) {
  const func = () => {
    console.log(movieData, rating, genre, releaseYear);
  };

  const [searchedMov, setSearchedMov] = useState([]);

  // let urls = [
  //   "https://api.themoviedb.org/3/movie/popular?api_key=98ae3afcd7b18c25ccd2d93f00f88c42",
  //   "https://api.themoviedb.org/3/movie/popular?api_key=98ae3afcd7b18c25ccd2d93f00f88c42",
  //   "https://api.themoviedb.org/3/movie/popular?api_key=98ae3afcd7b18c25ccd2d93f00f88c42",
  // ];

  // useEffect(() => {
  //   const requests = urls.map((url) => axios.get(url));
  //   axios
  //     .all(requests)
  //     .then((responses) => {
  //       responses.forEach((resp) => {
  //         console.info(1);
  //       });
  //     })
  //     .catch((errors) => {
  //       errors.forEach((error) => {
  //         console.info(1);
  //       });
  //     });
  // }, [searchQuery]);

  useEffect(() => {
    if (searchQuery) {
      axios
        .get(
          "https://api.themoviedb.org/3/search/movie?api_key="+ process.env.REACT_APP_TMDB_API_KEY +"&language=en-US&query=" +
            searchQuery +
            "&include_adult=false"
        )
        .then((resp) => {
          const data = resp.data.results;
          if (data) setSearchedMov(data);
          console.log(data, searchQuery);
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
      array.map((e) => {
        if (e.poster_path) count1 += 1;
      });
      array.map((e) => {
        if (e.title) count2 += 1;
      });
      if (count1 > 0 && count2 > 0) {
        return true;
      }
    }
    return false;
  };

  const searchedMovies = () => {
    return (
      <div className="searchresults">
        <h3 style={{ fontSize: "1.5rem" }}>Your Search Results</h3>
        <div className="movieflex">
          {searchedMov.map((movie, i) => {
            if (movie.title && movie.poster_path && movie.overview) {
              // if(rating !== 0 && genre !== "" && releaseYear !== ""){
              //   console.log("check");
              //   if((movie.vote_average / 2) >= rating && (movie.release_date.split("-")[0] >= releaseYear) && movie.genre_ids.includes(genre)){
                  return (
                    <div key={i}>
                      <MovieCard
                        posterPath={movie.poster_path}
                        title={movie.title}
                        date={movie.release_date}
                        description={movie.overview}
                      />
                    </div>
                  );
                // }
              }
            }
          ) }
        </div>
      </div>
    );
  };

  const simpleView = () => {
    return (
      <div className="popularmovies">
        <h3 style={{ fontSize: "1.5rem" }}>Popular Movies</h3>
        <div className="movieflex">
          {movieData.map((movie, i) => {
            if (movie.title && movie.poster_path && movie.overview) {
              return (
                <div key={i}>
                  <MovieCard
                    posterPath={movie.poster_path}
                    title={movie.title}
                    date={movie.release_date}
                    description={movie.overview}
                  />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="moviesholder">
      {func()}
      {isValid(searchedMov) ? (
        searchedMovies()
      ) : searchQuery ? (
        <div>
          <h3 style={{textAlign:"center"}}> {"<"} Results not Found {">"} </h3>
          {simpleView()}
        </div>
      ) : (
        simpleView()
      )}
    </div>
  );
}

export default MovieDisplay;
