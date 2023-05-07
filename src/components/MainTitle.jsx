import React from "react";

const MainTitle = ({ title, titleTwo }) => {
  return (
    <h2 className="main-title m-auto">
      {title}
      {titleTwo === undefined ? "" : <span>{titleTwo}</span>}
    </h2>
  );
};

export default MainTitle;
