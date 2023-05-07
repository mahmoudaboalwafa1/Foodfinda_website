import React from "react";
import { BtnGreen, MainTitle, Overlay } from "../../../components/index";
import { dataQuickTitle, dataQuickCard } from "../../../data/dataQuickSearchs";
import "./quick.css";

const QuickSearchs = () => {
  return (
    <section className="quick-search">
      <Overlay>
        <MainTitle title={dataQuickTitle} />
        <div className="container">
          {dataQuickCard.map((card, index) => (
            <div className="quick-card" key={index}>
              <img src={card.img} alt={card.title} />
              <h3>{card.title}</h3>
              <BtnGreen>{card.btn.toUpperCase()}</BtnGreen>
            </div>
          ))}
        </div>
      </Overlay>
    </section>
  );
};

export default QuickSearchs;
