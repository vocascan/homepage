import React, { useEffect, useState } from "react";

import "./Template.scss";

interface Props {
  url: string;
}

const Template: React.FC<Props> = ({ url }) => {
  const [template, setTemplate] = useState<string>("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then((res) => {
        setTemplate(res);
      });
  }, [url]);

  return (
    <div
      className="template-wrapper"
      dangerouslySetInnerHTML={{ __html: template }}
    ></div>
  );
};

export default Template;
