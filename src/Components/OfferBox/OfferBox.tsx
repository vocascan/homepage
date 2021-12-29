import React from "react";

interface Props {
  image: any;
  description: string;
}

const OfferBox: React.FC<Props> = ({ image, description }) => {
  return (
    <div className="w-full bg-alternative rounded-3xl mb-10 flex flex-col justify-between py-10 px-10 items-center lg:w-1/4">
      <img className={`w-1/2`} src={image} alt="offer" />
      <p className="text-text-light text-center text-sm mt-5 lg:text-lg lg:w-5/6">
        {description}
      </p>
    </div>
  );
};

export default OfferBox;
