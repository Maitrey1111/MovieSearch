import {React} from "react";
import "../static/MovieCard.css";

function MovieCard({posterPath, title, date, description}) {
  const url = "https://www.themoviedb.org/t/p/w220_and_h330_face/" + posterPath;
  return (
    <a href="#" className="holder">
      <div className="poster">
        <img src={url} alt="img_poster" />
      </div>
      <div className="text">
        <h3 className="movietitle">{title.toUpperCase()}</h3>
        {/* <h5>[ {date} ] </h5> */}
        <p>{description}</p>
        {/* <br/> */}
        <span>...</span>
        <button onClick={()=>window.location.href='https://google.com'}>Watch Now</button>
      </div>
    </a>
  );
}

export default MovieCard;
