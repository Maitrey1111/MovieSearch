import { color } from "@mui/system";
import React from "react";
import "../static/Navbar.css";

function NavBar() {
  return (
    <div className="navbar">
      <div>
        <a href="#" style={{ color: "rgb(255, 85, 85)", textDecoration: "none" }}>
          <h1 id="title">MovieSearch</h1>
        </a>
      </div>
      <div className="info" style={{ display: "flex", columnGap: "3vw" }}>
        {/* <a
          href="https://github.com/Maitrey1111"
          target={"_blank"}
          style={{ color: "white", textDecoration: "none" }}
        >
          <h3>GitHub</h3>
        </a> */}
        <a
          href="https://github.com/Maitrey1111/MovieSearch/tree/master"
          target={"_blank"}
          style={{ color: "white", textDecoration: "none" }}
        >
          <h3>About the Project</h3>
        </a>
      </div>
    </div>
  );
}

export default NavBar;
