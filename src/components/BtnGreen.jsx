import React from "react";

const BtnGreen = ({ children, color }) => {
  return (
    <div className="btn-green">
      <button className={`btn-green ${color}`}>{children}</button>
    </div>
  );
};

export default BtnGreen;
