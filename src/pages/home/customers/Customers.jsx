import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { MainTitle, Overlay } from "../../../components/index";
import { customersTitle, customersCard } from "../../../data/dataCustomers";
import "./customers.css";

const Customers = () => {
  return (
    <section className="customer">
      <Overlay>
        <MainTitle title={customersTitle} />
        <div className="container">
          {customersCard.map((card, index) => {
            const { title, text } = card;
            return (
              <div key={index} className="card-customer">
                <h4>{title}</h4>
                <p>{text}</p>
              </div>
            );
          })}
        </div>
        <ul>
          <FaAngleLeft />
          <FaAngleRight />
        </ul>
      </Overlay>
    </section>
  );
};

export default Customers;
