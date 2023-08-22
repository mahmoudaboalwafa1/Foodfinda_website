import React, { useContext } from "react";
import { MainContext } from "../../context/mainContext";
import { FaPhoneAlt, FaEnvelope, FaBars } from "react-icons/fa";
import { Icons } from "../../components/index";
import logoHeader from "../../assets/images/logo.png";
import "./header.css";

const Header = () => {
  const dataHeader = useContext(MainContext);
  return (
    <header>
      <div className="container">
        <Icons
          icon={<FaPhoneAlt />}
          text="Call: +01285817158"
          phone="tel:+2012858517158"
        />
        <li className="container">
          <img src={logoHeader} alt="logo-header" />
          <FaBars className="menu" onClick={() => dataHeader.showNav("show")} />
        </li>
        <Icons
          icon={<FaEnvelope />}
          text="Email: mahmoudsayed112@gmail.com"
          email="mailto:112mahmoudsayed@gmail.com"
        />
      </div>
    </header>
  );
};

export default Header;
