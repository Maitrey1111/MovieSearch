import { React, useState } from "react";

import MovieDisplay from "../components/MovieDisplay.jsx";
import Navbar from "../components/Navbar.jsx";
import SearchBar from "../components/SearchBar.jsx";
import Footer from "../components/Footer.jsx"

import "../static/LandingPage.css";

function LandingPage() {
  const [query, setQuery] = useState("");
  const [rating, setRating] = useState();
  const [genre, setGenre] = useState();
  const [releaseYear, setReleaseYear] = useState();

  return (
    <div className="landingpage">
      <div className="compsholder">
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
          searchQuery={query}
          rating={rating}
          genre={genre}
          releaseYear={releaseYear}
        />
        
        <Footer/>

      </div>
    </div>
  );
}

export default LandingPage;
