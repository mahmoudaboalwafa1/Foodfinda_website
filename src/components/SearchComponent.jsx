import React, { useState } from "react";
import { FaAngleDown, FaSearch } from "react-icons/fa";
import { dataBox } from "../data/dataLanding";

const SearchComponent = () => {
  const [value, setValue] = useState(dataBox[0]);
  const [show, setShow] = useState(false);
  const showBox = () => {
    setShow(!show);
  };

  return (
    <div className="filter">
      <div>
        <button onClick={showBox}>
          {value} <FaAngleDown />
        </button>
        <ul className={`${show ? "show" : ""}`}>
          {dataBox.map((li, index) => (
            <li onClick={() => setValue(li)} key={index}>
              {li}
            </li>
          ))}
        </ul>
      </div>
      <form className="align-center w-100" onSubmit={(e) => e.preventDefault()}>
        <input type="search" placeholder="Search" />
        <FaSearch />
      </form>
    </div>
  );
};

export default SearchComponent;
