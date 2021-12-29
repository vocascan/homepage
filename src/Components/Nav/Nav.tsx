import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

import Button from "../Button/Button";

import { navLinks } from "../../utils/constants";

import VocascanLogo from "../../images/logo/color-round.svg";
import HamburgerMenuIcon from "../../images/icons/hamburger.svg";

import useWindowDimensions from "../../hooks/UseWindowDimensions";
import { useScrollBlock } from "../../hooks/useScrollBlock";

const Nav: React.FC = () => {
  const { height } = useWindowDimensions();
  const [blockScroll, allowScroll] = useScrollBlock();

  const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false);
  const [background, setBackground] = useState<string>("bg-transparent");

  const listenScrollEvent = useCallback(() => {
    if (window.scrollY > height) {
      return setBackground("bg-background");
    } else if (window.scrollY < height) {
      return setBackground("bg-transparent");
    }
  }, [height]);

  const triggerHamburgerMenu = useCallback(() => {
    setHamburgerOpen(!hamburgerOpen);
  }, [hamburgerOpen]);

  //add background color, if nav is below hero section
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, [listenScrollEvent]);

  useEffect(() => {
    hamburgerOpen ? blockScroll() : allowScroll();
  }, [allowScroll, blockScroll, hamburgerOpen]);

  return (
    <>
      <div
        className={`${background} ${
          hamburgerOpen && "bg-transparent"
        } fixed h-14 overflow-hidden top-0 w-full z-50`}
      >
        <div className="flex flex-row justify-between items-center h-full w-5/6 m-auto">
          <Link to="/">
            <div className="flex center items-center">
              <img className="w-9 " src={VocascanLogo} alt="Logo" />
              <p className="text-text-light pl-3 text-xl uppercase">Vocascan</p>
            </div>
          </Link>
          <div className="hidden lg:block">
            <ul className="flex flex-row">
              {navLinks?.map((e: any) => (
                <li>
                  {/^https?:\/\//i.test(e.link) ? (
                    <a className="text-text-light text-lg mx-10" href={e.link}>
                      {e.name}
                    </a>
                  ) : (
                    <Link className="text-text-light text-lg mx-10" to={e.link}>
                      {e.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:block">
            <Button block uppercase>
              {"Start Learning"}
            </Button>
          </div>
          <img
            className="h-11 lg:hidden"
            src={HamburgerMenuIcon}
            alt="menu"
            onClick={triggerHamburgerMenu}
          />
        </div>
      </div>
      <div
        className={`w-full h-full bg-alternative fixed top-0 left-0 z-10 overflow-hidden ${
          hamburgerOpen ? "fixed" : "hidden"
        } flex flex-col justify-center items-center`}
      >
        <ul className="flex flex-col">
          {navLinks?.map((e: any) => (
            <li className="text-center my-2">
              {/^https?:\/\//i.test(e.link) ? (
                <a className="text-text-light text-lg" href={e.link}>
                  {e.name}
                </a>
              ) : (
                <Link
                  className="text-text-light text-lg text-center"
                  to={e.link}
                >
                  {e.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <div className="mt-5">
          <Button block uppercase>
            {"Start Learning"}
          </Button>
        </div>
      </div>
    </>
  );
};

export default Nav;
