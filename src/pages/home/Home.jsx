import React from "react";
import { Landing, Blogs, Shop, Customers, Contact } from "../index";
import QuickSearchs from "./services/QuickSearchs";

const Home = () => {
  return (
    <article className="home">
      <Landing />
      <QuickSearchs />
      <Blogs />
      <Shop />
      <Customers />
      <Contact />
    </article>
  );
};

export default Home;
