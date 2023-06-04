import React from "react";
import "./AboutFooter.css";
import { Link } from "react-router-dom";

import { FaFacebook, FaLinkedin } from "react-icons/fa";

function AboutFooter() {
  return (
    <div>
      <div className="talk">
        <div className="firstTalk">
          <p>COLLABORATION</p>
          <h1 className="talkP">We’d like to talk</h1>
        </div>
        <div className="secondTalk">
          <p>
            We build and activate brands through cultural insight, strategic
            vision, and the power of emotion across every element of its
            expression.
          </p>
          <Link to="/message">
            <button>Let's Talk - Send A Message</button>
          </Link>
        </div>
      </div>
      <hr />
      <div className="aboutLinks">
        <div className="aboutLink1">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="aboutLink">
          <p className="helpText">NEED HELP?</p>
          <p className="helpInfo">Egypt: +20225383285</p>
          <p className="helpInfo">Italy: +393423575226</p>
          <p className="helpText">NEED SUPPORT?</p>
          <p className="helpInfo">
            <a className="email" href="mailto:support@cmginvestment.com">
              support@cmginvestment.com
            </a>
          </p>
        </div>
        <div className="aboutLink">
          <p className="follow">FOLLOW US</p>
          <div>
            <Link
              to="https://www.facebook.com/citymegagroupholding/"
              target="_blank"
              className="aboutIcon"
            >
              <FaFacebook />
            </Link>
            <Link
              to="https://www.linkedin.com/company/cmg-city-mega-group/"
              target="_blank"
              className="aboutIcon"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <div className="aboutBottom">
        <p>City Mega Group</p>
        <p>© 2023. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default AboutFooter;
