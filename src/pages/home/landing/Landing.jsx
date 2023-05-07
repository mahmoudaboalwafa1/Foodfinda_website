import React from "react";
import "./landing.css";
import { Navbar } from "../../index";
import {
  Overlay,
  MainTitle,
  SearchComponent,
  BtnGreen,
} from "../../../components/index";
import { title, text } from "../../../data/dataLanding";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Landing = () => {
  return (
    <section className="landing bg-cover">
      <Overlay>
        <FaAngleRight className="right" />
        <div className="container">
          <MainTitle title={title} />
          <p>{text}</p>
          <SearchComponent />
        </div>
        <BtnGreen color="white">Order Now</BtnGreen>
        <FaAngleLeft className="left" />
      </Overlay>
    </section>
  );
};

export default Landing;
