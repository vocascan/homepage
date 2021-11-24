import React from "react";

import Button from "../../Components/Button/Button.jsx";

import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-inner">
          <h1>Learning has never been easier</h1>
          <p>Vocascan - A highly configurable vocabulary trainer</p>
          <div className="button-wrapper">
            <Button block uppercase disabled={true}>
              {"Start Learning"}
            </Button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
