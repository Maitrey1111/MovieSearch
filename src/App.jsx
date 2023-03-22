import axios from "axios";
import { useState, useEffect } from "react";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./views/LandingPage.jsx";

function App() {
  const [popularMov, setPopularMov] = useState([]);
  const [upcomingMov, setUpcomingMov] = useState([]);

  //popular movies are shown
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=98ae3afcd7b18c25ccd2d93f00f88c42"
      )
      .then((resp) => {
        const data = resp.data.results;
        setPopularMov(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<LandingPage movieData={popularMov} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
