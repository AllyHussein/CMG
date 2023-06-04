import React from "react";
import FAQs from "../Accordion/Acordion";
import "./Intro.css";
import Video from "../../assets/City Mega Group Services.mp4";

function Intro() {
  return (
    <div className="introContainer">
      <div className="videoContainer">
        <video autoPlay controls loop muted className="introVideo">
          <source src={Video} type="video/mp4" />
        </video>
      </div>
      <div className="faqsContainer">
        <FAQs />
      </div>
    </div>
  );
}

export default Intro;
