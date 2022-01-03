import React from "react";

interface Props {
  heading: string;
  image: any;
  description: string;
  reverse?: boolean;
}

const Feature: React.FC<Props> = ({
  heading,
  image,
  description,
  reverse = false,
}) => {
  return (
    <div className="w-full bg-background flex flex-col items-center justify-between my-20 lg:flex-row">
      {reverse ? (
        <>
          <div className="flex flex-col justify-center lg:w-2/5">
            <h1 className="text-primary-light text-2xl text-center uppercase lg:mt-0 lg:text-right">
              {heading}
            </h1>
            <p className="text-text-light text-sm my-5 text-justify lg:text-lg">
              {description}
            </p>
          </div>
          <img className="lg:w-2/5" src={image} alt="preview" />
        </>
      ) : (
        <>
          <img className="lg:w-2/5" src={image} alt="preview" />
          <div className="flex flex-col justify-center lg:w-2/5">
            <h1 className="text-primary-light text-2xl my-5 text-center uppercase lg:mt-0 lg:text-left">
              {heading}
            </h1>
            <p className="text-text-light text-sm text-justify lg:text-lg">
              {description}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Feature;
