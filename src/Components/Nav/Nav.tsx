import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

import Button from "../Button/Button";

import VocascanLogo from "../../images/logo/color-round.svg";

import "./Nav.scss";
import useWindowDimensions from "../../hooks/UseWindowDimensions";

const Nav: React.FC = () => {
  const { height } = useWindowDimensions();
  const [background, setBackground] = useState("bg-transparent");

  const listenScrollEvent = useCallback(() => {
    if (window.scrollY > height) {
      return setBackground("bg-black");
    } else if (window.scrollY < height) {
      return setBackground("bg-transparent");
    }
  }, [height]);

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, [listenScrollEvent]);

  return (
    <div
      className={`${background} fixed bg-transparent h-14 overflow-hidden top-0 w-full z-50`}
    >
      <div className="flex flex-row justify-between items-center h-full w-5/6 m-auto">
        <Link to="/">
          <div className="flex center items-center">
            <img className="w-9 " src={VocascanLogo} alt="Logo" />
            <p className="text-white pl-3 text-xl uppercase">Vocascan</p>
          </div>
        </Link>
        <h1 className="text-white">Hello</h1>
      </div>
      {/*<div className="nav-wrapper">
        
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
  </div>*/}
    </div>
  );
};

export default Nav;
