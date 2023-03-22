import { color } from "@mui/system";
import React from "react";
import "../static/Navbar.css";

function NavBar() {
  return (
    <div className="navbar">
      <div>
        <h1>MovieSearch</h1>
      </div>
      <div style={{ display: "flex", columnGap:"3vw"}}>
        <a
          href="https://github.com/Maitrey1111"
          target={"_blank"}
          style={{ color: "white", textDecoration: "none" }}
        >
          <h3>GitHub</h3>
        </a>
        <a
          href="#"
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
