import { React, useState } from "react";

import Footer from "../components/Footer.jsx";
import MovieDisplay from "../components/MovieDisplay.jsx";
import Navbar from "../components/Navbar.jsx";
import SearchBar from "../components/SearchBar.jsx";

import "../static/LandingPage.css";
// import {coverImage} from "../../public/netflix-cover.jpg"

function LandingPage({ movieData }) {
  const [query, setQuery] = useState("");
  const [rating, setRating] = useState(0);
  const [genre, setGenre] = useState("");
  const [releaseYear, setReleaseYear] = useState("");

  const func = () => {
    console.log(query, "---");
  };
  return (
    <div className="landingpage">
      <div className="compsholder">
        {/* {func()} */}
        <Navbar />
        <SearchBar
          setQuery={setQuery}
          rating={rating}
          genre={genre}
          releaseYear={releaseYear}
          setRating={setRating}
          setGenre={setGenre}
          setReleaseYear={setReleaseYear}
        />
        <MovieDisplay
          movieData={movieData}
          searchQuery={query}
          rating={rating}
          genre={genre}
          releaseYear={releaseYear}
        />
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
