import React from "react";
import Building from "../../assets/building.jpg";
import "./ContactUs.css";
import Addresses from "../Addresses/Addresses";

function ContactUs() {
  return (
    <div className="contactUsContainer">
      <div className="contactUsText">
        <h3>Contact Us</h3>
        <h1>We are delighted to welcome you in our offices</h1>
      </div>
      <img src={Building} alt="Building" className="building" />
      <Addresses />
    </div>
  );
}

export default ContactUs;
