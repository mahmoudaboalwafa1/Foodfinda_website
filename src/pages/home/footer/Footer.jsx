import React from "react";
import { MainTitle, Overlay } from "../../../components";
import { footerText, footerTitles } from "../../../data/dataFooter";
import "./footer.css";
import { NavLink } from "react-router-dom";
import IconsFooter from "./iconsFooter";

const Footer = () => {
  return (
    <footer>
      <Overlay name="no-pad">
        <div className="container">
          {footerTitles.map((foot, index) => {
            return (
              <div key={index}>
                {<MainTitle title={foot.title} />}
                {foot.text != undefined && <p>{foot.text}</p>}
                {foot.links != undefined && (
                  <ul>
                    {foot.links.map((link, index) => (
                      <NavLink
                        key={index}
                        to={`/${link === "Home" ? "" : link}`}
                      >
                        {link}
                      </NavLink>
                    ))}
                  </ul>
                )}
                {foot.icons != undefined && <IconsFooter />}
              </div>
            );
          })}
        </div>
        <div className="copy-right">{footerText}</div>
      </Overlay>
    </footer>
  );
};

export default Footer;
