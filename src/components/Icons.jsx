import React from "react";

const Icons = ({ icon, text, phone, email }) => {
  return (
    <li className="icon align-center">
      {icon}
      <a href={phone ? phone : email}>{text}</a>
    </li>
  );
};

export default Icons;
