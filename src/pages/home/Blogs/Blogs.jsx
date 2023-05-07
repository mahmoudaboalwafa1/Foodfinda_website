import React from "react";
import { BtnGreen, MainTitle, Overlay } from "../../../components/index";
import { blogsTitle, blogsCards } from "../../../data/BlogsData";
import "./blogs.css";

const Blogs = () => {
  return (
    <section className="blogs bg-cover">
      <Overlay>
        <div className="container">
          <MainTitle title={blogsTitle} />
          {blogsCards.map((card, index) => {
            const { img, title, text, btn } = card;
            return (
              <div key={index} className="blogs-cards">
                <img className="w-100" src={img} alt={title} />
                <div className="inner-card">
                  <h2>{title}</h2>
                  <p>{text}</p>
                  <BtnGreen color="yellow">{btn}</BtnGreen>
                </div>
              </div>
            );
          })}
        </div>
      </Overlay>
    </section>
  );
};

export default Blogs;
