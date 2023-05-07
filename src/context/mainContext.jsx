import React, { createContext, useState } from "react";
import { Header } from "../pages/index";

const MainContext = createContext();

const MainProvider = ({ children }) => {
  const [classNav, setClassNav] = useState("");
  const showNav = (className) => {
    setClassNav(className);
  };
  const closeNav = () => {
    setClassNav("");
  };

  return (
    <MainContext.Provider value={{ classNav, showNav, closeNav }}>
      {children}
    </MainContext.Provider>
  );
};

export { MainContext, MainProvider };
