import React from "react";
import { Link } from "react-router-dom";

import "./FooterBox.scss";

interface Props {
  heading: string,
  list: any
}

const FooterBox: React.FC<Props> = ({ heading, list }) => {
  return (
    <div className="footer-box">
      <div className="footer-box-inner">
        <p>{heading}</p>
        <div className="footer-box-links">
          <ul>
            {list?.map((e: any) => (
              <li>
                {/^https?:\/\//i.test(e.link) ? (
                  <a href={e.link}>{e.name}</a>
                ) : (
                  <Link to={e.link}>{e.name}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterBox;
