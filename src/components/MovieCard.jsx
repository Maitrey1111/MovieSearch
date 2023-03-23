import { React, useEffect, useState } from "react";
import axios from "axios";
import "../static/MovieCard.css";

function MovieCard({posterPath, title, date, description, rating, movieId}) {
  const url = "https://www.themoviedb.org/t/p/w220_and_h330_face/" + posterPath;
  const video_url = "https://api.themoviedb.org/3/movie/"+movieId+"/videos?api_key=98ae3afcd7b18c25ccd2d93f00f88c42&language=en-US"

  const [link, setLink] = useState()

  useEffect(() => {
    axios
      .get(
        video_url
      )
      .then((resp) => {
        const data = resp.data.results;
        if(data.length > 0){
          const link = 'https://www.youtube.com/watch?v=' + data[0].key;
          setLink(link);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <a href="/" rel="noreferrer" className="holder">
      <div className="poster">
        <img src={url} alt="img_poster" />
      </div>
      <div className="text">
        <h3 className="movietitle">{title.toUpperCase()}</h3>
        <h5> ({(new Date(Date.parse(date))).getFullYear()}) </h5>
        <h5>{rating.toFixed(1)} out of 5 </h5>
        <p>{description}</p>
        <span>...</span>
        <a href={link} target={"_blank"} rel="noreferrer">Glance</a>
      </div>
    </a>
  );
}

export default MovieCard;
