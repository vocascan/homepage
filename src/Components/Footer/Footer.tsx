import React from "react";
import { Link } from "react-router-dom";

import FooterBox from "./FooterBox";

import { footerLinks } from "../../utils/constants";

import VocascanLogo from "../../images/logo/color-round.svg";

const Footer: React.FC = () => {
  return (
    <div className="w-full pt-20 bg-alternative">
      <div className="w-5/6 mx-auto lg:w-1/2">
        <div className="w-full flex flex-row items-center mb-10">
          <img className="w-10" src={VocascanLogo} alt="Logo" />
          <p className="text-text-light text-xl ml-3">Vocascan</p>
        </div>
        <div className="flex flex-col justify-between lg:flex-row">
          {Object.entries(footerLinks).map(([key, value], i) => (
            <FooterBox heading={key} list={value} />
          ))}
        </div>
      </div>
      <div className="w-full mt-5">
        <hr className="w-full h-2 text-primary-standard" />
        <div className="w-5/6 mx-auto py-5 lg:w-1/2">
          <div className="flex flex-row justify-between">
            <p className="text-text-light">©2021 Vocascan</p>
            <Link className="text-text-light" to="/legal-notice">
              Legal Notice
            </Link>
            <Link className="text-text-light" to="/privacy">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
