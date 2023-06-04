import React from "react";
// import CMGLOGO from "../../assets/CMG-LOGO.jpg";
import LOGO from "../../assets/logo.png";
import OWNER from "../../assets/MZP05283.jpg";
import OWNER2 from "../../assets/MZP05690COPY.jpg";
import "./AboutUs.css";
import AboutFooter from "../AboutFooter/AboutFooter";
function AboutUs() {
  return (
    <div className="aboutUsContainer">
      <img className="companyImg" src={LOGO} alt="logo" />
      <div className="aboutUsText">
        <p className="firstText">
          We Empower The Italian And Egyptian Economies Since 1992
        </p>
        <p className="secondText">
          City Mega Group is a holding company founded in Italy 1992 by
          Egyptian-Italian Businessman. Dr. Maged Hanna, whom was willing to
          transmit his Italian experience to the Egyptian market and invested in
          Egypt in 2018. City Mega Group works in different sectors such as real
          estate brokerage, construction, restaurants ,hotels and events.
          Distinguished with its professional management and well trained
          employees.
        </p>
      </div>
      <hr />
      <div className="aboutUsText2">
        <h1 className="aboutUsText2FirstText">
          Beyond <span>conventional</span> solutions.
        </h1>
        <p className="aboutUsText2SecondText">
          In every market we invest in, we thrive to finding gaps in that market
          and innovate a customer-centric solution for them.
        </p>
      </div>
      <div className="exp">
        <img src={OWNER2} alt="owner" />
        <div>
          <p>We build powerful and remarkable brands.</p>
          <p>
            <span>31 </span>Years of experience
          </p>
        </div>
      </div>
      <div className="theOwner">
        <img src={OWNER} alt="owner" />
        <p>Dr. Maged Hanna | Founder of City Mega Group</p>
      </div>
      <AboutFooter />
    </div>
  );
}

export default AboutUs;
