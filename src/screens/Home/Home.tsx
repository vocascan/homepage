import React from "react";

import Button from "../../Components/Button/Button";

import "./Home.scss";


const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <video className="background-video" autoPlay loop muted>
          {/*<source src={sample} type="video/mp4" />*/}
        </video>
        <div className="hero-inner">
          <h1>Explore the variety of languages</h1>
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
