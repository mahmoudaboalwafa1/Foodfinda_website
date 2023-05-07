import React from "react";

const Overlay = ({ children, name = "" }) => {
  return <div className={`overlay ${name}`}>{children}</div>;
};

export default Overlay;
