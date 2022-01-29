import React from "react";

import Button from "../../Components/Button/Button";
import Feature from "../../Components/Feature/Feature";

import sample from "../../images/videos/hero-section.mp4";

import featureLearnGif from "../../images/gifs/learn.gif";
import featureLanguageGif from "../../images/gifs/language.gif";
import featureCloudGif from "../../images/gifs/cloud.gif";

import LockIcon from "../../images/icons/lock.svg";
import CloudIcon from "../../images/icons/cloud.svg";
import SettingsIcon from "../../images/icons/settings.svg";

import "./Home.scss";
import OfferBox from "../../Components/OfferBox/OfferBox";
import useWindowDimensions from "../../hooks/UseWindowDimensions";
import { docsDomain, githubDomain, webDomain } from "../../utils/constants";

const Home = () => {
  //fetch width to check whether feature should be reversed or not at specific display resolution
  const { width } = useWindowDimensions();

  return (
    <div className="w-full flex flex-col items-center bg-background justify-center">
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <video className="w-full h-screen object-cover" autoPlay loop muted>
          <source src={sample} type="video/mp4" />
        </video>
        <div className="w-5/6 lg:w-4/6 absolute">
          <h1 className="text-3xl uppercase text-text-light mb-3 lg:text-5xl">
            Explore the variety of languages
          </h1>
          <p className="text-xl text-text-light mb-3 lg:text-xl">
            Vocascan - A highly configurable vocabulary trainer
          </p>
          <div className="flex flex-col lg:flex-row">
            <div className="mb-5 lg:mr-6 lg:mb-0">
              <a href={webDomain}>
                <Button uppercase>{"Start Learning"}</Button>
              </a>
            </div>
            <div>
              <a href={docsDomain}>
                <Button variant="outline" appearance="green" uppercase>
                  {"Documentation"}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-5/6 lg:w-4/6 flex flex-col items-center bg-background justify-center mx-auto">
        <div className="w-full">
          <h1 className="uppercase text-xl lg:text-2xl text-text-light text-center mb-2 mt-20">
            About this project
          </h1>
          <div className="w-1/2 h-1 bg-primary-standard rounded-xl mx-auto mb-5 lg:w-1/6"></div>
          <p className="text-text-light text-base lg:text-lg text-justify">
            Digitalization is creating a huge change in the world. We no longer
            only have the chance to communicate with our fellow human beings in
            the vicinity, but to interact quickly and easily around the entire
            globe. Language is our most important medium, which helps us to
            interact with the other person. A common language helps to make life
            easier and to break barriers. That's why we founded Vocascan, a
            server-client based open-source vocabulary trainer. We believe that
            everyone should have the chance to learn another language for free
            and in their own way. Based on the ever-proven principle of
            flashcards, we have developed a highly configurable trainer that has
            many settings to adapt it to your learning methods and strategies.
          </p>
          <h1 className="text-white">{width}</h1>
        </div>
        <div className="w-full mt-10">
          <Feature
            heading={"Easy learning"}
            image={featureLearnGif}
            description={
              "Everyone has different learning strategies and methods to best remember things. That's why we designed Vocascan to provide the widest possible range of settings."
            }
          />
          <div className="w-1/2 h-1 bg-primary-light rounded-xl mx-auto lg:hidden"></div>
          <Feature
            reverse={width < 1024 ? false : true}
            heading={"Large language support"}
            image={featureLanguageGif}
            description={
              "No matter which language you want to learn, we hope to find the right choice for you. Vocascan supports the selection of 184 languages out of the box."
            }
          />
          <div className="w-1/2 h-1 bg-primary-light rounded-xl mx-auto lg:hidden"></div>
          <Feature
            heading={"Cloud based"}
            image={featureCloudGif}
            description={
              "Vocascan is based on a server-client structure. In this way, all your requests come together at one node, which can be queried anywhere and at any time. Always have your vocabulary with you."
            }
          />
        </div>
        <div className="w-full mb-10 mt-10">
          <h1 className="uppercase text-xl lg:text-2xl text-text-light text-center mb-2">
            How to start
          </h1>
          <div className="w-1/4 h-1 bg-primary-standard rounded-xl mx-auto mb-5 lg:w-20"></div>
          <p className="text-text-light text-justify lg:text-lg">
            As Vocascan is cloud based, you will need to set up your own server
            if you do not want to use ours. This gives you the greatest control
            over your data. Learn more about how to use Vocascan.
          </p>
          <div className="flex flex-row justify-center">
            <a href={githubDomain}>
              <Button className="mr-5 mt-5" uppercase>
                {"Check out Github"}
              </Button>
            </a>
            <a href={docsDomain}>
              <Button
                className="mx-auto mt-5"
                variant={"outline"}
                appearance="green"
                uppercase
              >
                {"Learn more"}
              </Button>
            </a>
          </div>
        </div>
        <div className="w-full mb-10 ">
          <h1 className="uppercase text-xl text-text-light text-center mb-2 mt-20">
            Our aim
          </h1>
          <div className="w-1/4 h-1 bg-primary-standard rounded-xl mx-auto mb-5 lg:w-20"></div>
          <p className="text-text-light text-center lg:text-lg">
            We work hard to provide you the best cover.
          </p>
          <div className="w-full mt-10 flex flex-col lg:flex-row lg:justify-between">
            <OfferBox
              image={LockIcon}
              description="The protection of your data is our highest priority"
            />
            <OfferBox
              image={CloudIcon}
              description="Cloud function to ensure synchronicity between your devices"
            />
            <OfferBox
              image={SettingsIcon}
              description="Many settings to customize Vocascan to your habits"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
