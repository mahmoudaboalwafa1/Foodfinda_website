import React from "react";
import {
  shopTitle,
  shopTitleTwo,
  shopText,
  storeApp,
  mobileImg,
} from "../../../data/dataShop";
import { MainTitle, Overlay } from "../../../components/index";
import "./shop.css";

const Shop = () => {
  return (
    <section className="shop">
      <Overlay>
        <div className="container">
          <div className="shop-text">
            <MainTitle title={shopTitle} titleTwo={shopTitleTwo} />
            <p>{shopText}</p>
            <ul>
              {storeApp.map((link, index) => (
                <li key={index}>
                  <img src={link} />
                </li>
              ))}
            </ul>
            <button>Download Now</button>
          </div>
          <img className="mobile" src={mobileImg} />
        </div>
      </Overlay>
    </section>
  );
};

export default Shop;
