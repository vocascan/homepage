import React from "react";
import { Link } from "react-router-dom";

import FooterBox from "./FooterBox.jsx";

import { footerLinks } from "../../utils/constants.js";

import VocascanLogo from "../../images/logo/color-round.svg";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-inner">
        <div className="footer-heading">
          <img className="footer-logo" src={VocascanLogo} alt="Logo" />
          <p>Vocascan</p>
        </div>
        <div className="footer-content">
          {Object.entries(footerLinks).map(([key, value], i) => (
            <FooterBox heading={key} list={value} />
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <hr />
        <div className="footer-bottom-wrapper">
          <div className="footer-bottom-wrapper-inner">
            <p>©2021 Vocascan</p>
            <Link to="/legal-notice">Legal Notice</Link>
            <Link to="/privacy">Privacy</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
