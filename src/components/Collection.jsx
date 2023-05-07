import React from "react";
import { Footer, Header, Navbar } from "../pages/index";

const Collection = ({ show }) => {
  return (
    <>
      <Header />
      <Navbar />
      {show}
      <Footer />
    </>
  );
};

export default Collection;
