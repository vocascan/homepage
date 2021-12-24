import React from "react";
import TypeAnimation from "react-type-animation";

import Button from "../../Components/Button/Button.jsx";

import "./Home.scss";

import sample from "../../images/videos/hero-section.mp4";

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <video className="background-video" autoPlay loop muted>
          <source src={sample} type="video/mp4" />
        </video>
        <div className="hero-inner">
          <TypeAnimation
            className="typing-animation"
            cursor={false}
            repeat={Infinity}
            sequence={[
              "Learning has never been easier",
              3000,
              "Learn smarter, not harder",
              3000,
              "Explore the variety of languages",
              3000,
              "Open-Source - Everything is in your hands",
              3000,
            ]}
            wrapper="h1"
          />
          <p>Vocascan - A highly configurable vocabulary trainer</p>
          <div className="button-wrapper">
            <Button block uppercase disabled={true}>
              {"Start Learning"}
            </Button>
          </div>
        </div>
      </div>
      <div className="product-preview"></div>
    </div>
  );
};

export default Home;
