import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";

export default function RickAndMorty() {
  return (
    <div className="page">
      <div className="Rick">
        <Nav />

        <div className="RickContainer">
          <div className="RickHeader">
            <h2>Rick and Morty Space Adventures</h2>
          </div>

          <img
            src="https://res.cloudinary.com/aaronculp/image/upload/v1543943983/Portfolio/Run-the-Jewels-Rick-and-Morty.jpg"
            className="rickHeaderPic"
            alt="Rick & Morty Space Adventures"
          />

          <section className="wireframesImg">
            <img
              src="http://res.cloudinary.com/aaronculp/image/upload/a_0/v1537901773/Project%201%20Wireframes/IMG_4265.jpg"
              alt="wireframes"
              height="500px"
              width="300px"
            />

            <div className="wireframesText">
              <p style={{ marginTop: "20px" }}>
                This was my first project while attending General Assembly. It
                was a built in JavaScript using the JS DOM.
              </p>
              <p style={{ marginTop: "20px" }}>
                The idea came from the old computer game Space Invaders. I am
                huge Rick & Morty fan so I decided to use this as the theme.{" "}
              </p>
              <p style={{ marginTop: "20px" }}>
                It is currently only for desktop but soon to be a mobile app!
              </p>
              <p style={{ marginTop: "20px" }}>
                Click the video below to play!
              </p>
            </div>
          </section>

          <section>
            <a
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
              href="https://aaculp.github.io/Rick-Morty-Space-Adventures/"
            >
              <video
                src="https://res.cloudinary.com/aaronculp/video/upload/v1558627040/RickAndMorty.mov"
                className="videoRick"
                autoPlay={true}
                loop={true}
                controls={true}
              />
            </a>
          </section>

          <Link to="/Remedi" style={{ textDecoration: "none" }}>
            <section className="footer">
              <p>Next Project!</p>
            </section>
          </Link>
        </div>
      </div>
    </div>
  );
}
