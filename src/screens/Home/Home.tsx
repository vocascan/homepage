import React from "react";

import Button from "../../Components/Button/Button";
import Feature from "../../Components/Feature/Feature";

import sample from "../../images/videos/hero-section.mp4";

import featureLearnGif from "../../images/gifs/learn.gif";
import featureLanguageGif from "../../images/gifs/language.gif";
import featureCloudGif from "../../images/gifs/cloud.gif";

import "./Home.scss";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center bg-background justify-center">
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <video className="w-full h-screen object-cover" autoPlay loop muted>
          <source src={sample} type="video/mp4" />
        </video>
        <div className="w-5/6 absolute">
          <h1 className="text-3xl text-text-light mb-3">
            Explore the variety of languages
          </h1>
          <p className="text-xl text-text-light mb-3">
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
        <h1 className="uppercase text-xl text-text-light text-center mb-2 mt-20">
          About this project
        </h1>
        <hr className="text-primary-standard w-1/2 h-1 rounded-xl mx-auto mb-5" />
        <p className="text-text-light text-justify">
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
      <div className="w-5/6 mt-10">
        <Feature
          heading={"Easy learning"}
          image={featureLearnGif}
          description={
            "Everyone has different learning strategies and methods to best remember things. That's why we designed Vocascan to provide the widest possible range of settings."
          }
        />
        <Feature
          heading={"Large language support"}
          image={featureLanguageGif}
          description={
            "No matter which language you want to learn, we hope to find the right choice for you. Vocascan supports the selection of 184 languages out of the box."
          }
        />
        <Feature
          heading={"Cloud based"}
          image={featureCloudGif}
          description={
            "Vocascan is based on a server-client structure. In this way, all your requests come together at one node, which can be queried anywhere and at any time. Always have your vocabulary with you."
          }
        />
      </div>
    </div>
  );
};

export default Home;
