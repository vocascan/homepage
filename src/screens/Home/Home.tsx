import React from "react";

import Button from "../../Components/Button/Button";

import sample from "../../images/videos/hero-section.mp4";

import "./Home.scss";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center bg-black justify-center">
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <video className="w-full h-screen object-cover" autoPlay loop muted>
          <source src={sample} type="video/mp4" />
        </video>
        <div className="w-5/6 absolute">
          <h1 className="text-3xl text-white mb-3">
            Explore the variety of languages
          </h1>
          <p className="text-xl text-white mb-3">
            Vocascan - A highly configurable vocabulary trainer
          </p>
          <div className="w-3/5">
            <Button block uppercase disabled={true}>
              {"Start Learning"}
            </Button>
          </div>
        </div>
      </div>
      <div className="w-5/6 mx-auto">
        <h1 className="uppercase text-xl text-white text-center mb-2 mt-20">
          About this project
        </h1>
        <hr className="bg-white w-1/2 h-1 rounded-xl mx-auto mb-5" />
        <p className="text-white mb-20 text-justify">
          Digitalization is creating a huge change in the world. We no longer
          only have the chance to communicate with our fellow human beings in
          the vicinity, but to interact quickly and easily around the entire
          globe. Language is our most important medium, which helps us to
          interact with the other person. A common language helps to make life
          easier and to break barriers. That's why we founded Vocascan, a
          server-client based open-source vocabulary trainer. We believe that
          everyone should have the chance to learn another language for free and
          in their own way. Based on the ever-proven principle of flashcards, we
          have developed a highly configurable trainer that has many settings to
          adapt it to your learning methods and strategies.
        </p>
      </div>
    </div>
  );
};

export default Home;
