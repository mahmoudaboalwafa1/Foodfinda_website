import React from "react";

const Icons = ({ icon, text }) => {
  return (
    <li className="icon align-center">
      {icon}
      <p>{text}</p>
    </li>
  );
};

export default Icons;
