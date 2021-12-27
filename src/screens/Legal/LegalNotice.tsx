import React from "react";

import Template from "../../Components/Template/Template";

import "./LegalNotice.scss";

const LegalNotice: React.FC = () => {
  return (
    <div className="legal-notice">
      <Template url="./legal-notice.html" />
    </div>
  );
};

export default LegalNotice;
