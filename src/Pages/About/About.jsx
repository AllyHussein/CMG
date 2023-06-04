import React from "react";
import Navbar from "../../Global/Navbar";
import AboutUs from "../../components/AboutUs/AboutUs";
import "./About.css";

function About() {
  return (
    <div>
      <div className="aboutContainer">
        <Navbar />
        <AboutUs />
      </div>
    </div>
  );
}

export default About;
