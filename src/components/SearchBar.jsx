import React from "react";

import TextField from "@mui/material/TextField";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";

import { genreList } from "../static/GenreList.js";
import "../static/SearchBar.css";

function SearchBar({
  setQuery,
  rating,
  setRating,
  genre,
  setGenre,
  releaseYear,
  setReleaseYear,
}) {
  const years = ["", 2023, 2022, 2021];

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <div className="searchbarHolder">
      <ThemeProvider theme={darkTheme}>
        <div className="choicesholder">
          <div className="searchbar">
            <TextField
              id="outlined-search"
              label="Search a Movie"
              type="search"
              sx={{ minWidth: "50vw" }}
              onChangeCapture={(e) => {
                setQuery(e.target.value);
              }}
            />
          </div>

          <div>
            <form className="filterform">
              <div>
                <h4>Search easily with the Filters</h4>
              </div>

              <div className="rating">
                <FormControl size="small">
                  <InputLabel id="demo-select-small">Rating</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={rating}
                    sx={{ minWidth: "100px" }}
                    label="Rating"
                    onChange={(e) => setRating(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>select</em>
                    </MenuItem>
                    <MenuItem value="4">Greater than Four</MenuItem>
                    <MenuItem value="3">Greater than Three</MenuItem>
                    <MenuItem value="2">Greater than Two</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div className="release">
                <FormControl size="small">
                  <InputLabel id="demo-select-small">Release</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={releaseYear}
                    sx={{ minWidth: "100px" }}
                    label="Release"
                    onChange={(e) => setReleaseYear(e.target.value)}
                  >
                    <MenuItem value={years[0]}>
                      <em>select</em>
                    </MenuItem>
                    <MenuItem value={years[1]}>2023</MenuItem>
                    <MenuItem value={years[2]}>2022</MenuItem>
                    <MenuItem value={years[3]}>2021</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div className="genre">
                <FormControl size="small">
                  <InputLabel id="demo-select-small">Genre</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={genre}
                    sx={{ minWidth: "100px" }}
                    label="Genre"
                    onChange={(e) => setGenre(e.target.value)}
                  >
                    <MenuItem value={""}>
                      <em>select</em>
                    </MenuItem>
                    {genreList.genres.map((genre, i) => {
                      if (genre.name && genre.id) {
                        return (
                          <MenuItem key={i} value={genre.id}>
                            {genre.name}
                          </MenuItem>
                        );
                      }
                      else{
                        return(<></>);
                      }
                    })}
                  </Select>
                </FormControl>
              </div>
            </form>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default SearchBar;
