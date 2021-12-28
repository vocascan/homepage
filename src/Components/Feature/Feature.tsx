import React from "react";

interface Props {
  heading: string;
  image: any;
  description: string;
}

const Feature: React.FC<Props> = ({ heading, image, description }) => {
  return (
    <div className="w-full bg-background flex flex-col items-center justify-center bg-alternative my-20">
      <h1 className="text-primary-light text-2xl mb-5 uppercase text-center">
        {heading}
      </h1>
      <img src={image} alt="preview" />
      <p className="text-text-light text-sm mt-5 text-justify">{description}</p>
    </div>
  );
};

export default Feature;
