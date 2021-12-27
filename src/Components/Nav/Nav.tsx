import React from "react";
import { Link } from "react-router-dom";

import Button from "../Button/Button";

import VocascanLogo from "../../images/logo/color-round.svg";

import "./Nav.scss";

const Nav: React.FC = () => {
  return (
    <div className="nav">
      <div className="nav-wrapper">
        <Link className="heading-link-wrapper" to="/">
          <div className="nav-heading">
            <img className="nav-logo" src={VocascanLogo} alt="Logo" />
            <p>Vocascan</p>
          </div>
        </Link>
        <div className="nav-links">
          <ul>
            <li>
              <Link to="/download">Download</Link>
            </li>
            <li>
              <a href="https://docs.vocascan.com">Docs</a>
            </li>
            <li>
              <a href="https://github.com/vocascan">About us</a>
            </li>
          </ul>
        </div>
        <div className="nav-submit">
          <Button block uppercase disabled={true}>
            {"Start Learning"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
