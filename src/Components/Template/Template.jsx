import React, { useEffect, useState } from "react";

import "./Template.scss";

const Template = ({ url }) => {
  const [template, setTemplate] = useState(null);

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
