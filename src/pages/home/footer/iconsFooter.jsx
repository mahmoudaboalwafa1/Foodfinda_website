import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const IconsFooter = () => {
  return (
    <div className="icons">
      {<FaFacebook />}
      {<FaTwitter />}
      {<FaLinkedin />}
      {<FaInstagram />}
    </div>
  );
};

export default IconsFooter;
