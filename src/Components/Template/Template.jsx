import React, { useEffect, useState } from "react";

const Template = ({ url }) => {
  const [template, setTemplate] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then((res) => {
        setTemplate(res);
      });
  }, [url]);

  return <div dangerouslySetInnerHTML={{ __html: template }}></div>;
};

export default Template;
