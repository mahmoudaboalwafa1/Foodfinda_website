import React, { useContext } from "react";
import { Slide } from "react-reveal";
import { MainContext } from "../../../context/mainContext";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import dataNav from "../../../data/dataNav";
import "./navbar.css";

const Navbar = () => {
  const dataHeader = useContext(MainContext);
  return (
    <Slide left>
      <nav className={`${dataHeader.classNav} `}>
        {dataNav.map((li, index) =>
          li === "search" ? (
            <NavLink to="#" key={index}>
              <FaSearch />
            </NavLink>
          ) : (
            <NavLink
              to={`/${li === "Home" ? "" : li.toLowerCase()}`}
              key={index}
            >
              {li.toUpperCase()}
            </NavLink>
          )
        )}
        <li className="close" onClick={dataHeader.closeNav}>
          x
        </li>
      </nav>
    </Slide>
  );
};

export default Navbar;
