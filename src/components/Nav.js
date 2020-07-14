import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="navContainer">
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <div className="navLeft">
          <span>A</span>
          <span className="logoSpin">A</span>
          <span>C</span>
        </div>
      </Link>

      <div className="navRight">
        <a href="https://www.linkedin.com/in/aaron-culp/">LinkedIn</a>

        <a href="https://github.com/aaculp">GitHub</a>

        <a href="https://www.instagram.com/thebrownsanda/">IG</a>
      </div>
    </div>
  );
}
