import React from "react";
import useInput from "../../../custom/useInput";
import { BtnGreen, MainTitle } from "../../../components/index";
import { boxtext, contactTitle } from "../../../data/dataContact";
import "./contact.css";
import { Overlay } from "../../../components/index";

const Contact = () => {
  const [valueName, propsName] = useInput("", "Name");
  const [valuePhone, propsPhone] = useInput("", "Phone Number");
  const [valueEmail, propsEmail] = useInput("", "Email");
  const [valueMessage, propsMessage] = useInput("", "Message");

  return (
    <div
      style={{
        width: "100%",
        backgroundImage: "url('../../../assets/images/body-bg.png')",
        backgroundSize: "cover",
      }}
      className="container app-contact w-100"
    >
      <Overlay name="no-pad">
        <section className="contact">
          <MainTitle title={contactTitle} />
          <form>
            <input value={valueName} {...propsName} />
            <input value={valuePhone} {...propsPhone} />
            <input value={valueEmail} {...propsEmail} />
            <textarea value={valueMessage} {...propsMessage}></textarea>
            <BtnGreen>Send</BtnGreen>
            <div className="align-center">
              <p>{boxtext.toUpperCase()}</p>
              <BtnGreen>order now</BtnGreen>
            </div>
          </form>
        </section>
      </Overlay>
    </div>
  );
};

export default Contact;
