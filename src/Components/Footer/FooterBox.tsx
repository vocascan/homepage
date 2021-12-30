import React from "react";
import { Link } from "react-router-dom";

interface Props {
  heading: string;
  list: any;
}

const FooterBox: React.FC<Props> = ({ heading, list }) => {
  return (
    <div className="flex align-center mb-5">
      <div className="footer-box-inner">
        <p className="text-text-light text-xl font-thin mb-3">{heading}</p>
        <div className="footer-box-links">
          <ul>
            {list?.map((e: any) => (
              <li>
                {/^https?:\/\//i.test(e.link) ? (
                  <a
                    className="text-text-light text-sm font-light"
                    href={e.link}
                  >
                    {e.name}
                  </a>
                ) : (
                  <Link
                    className="text-text-light text-sm font-light"
                    to={e.link}
                  >
                    {e.name}
                  </Link>
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
