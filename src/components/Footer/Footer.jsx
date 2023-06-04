import React from "react";
import { FaHandPointRight } from "react-icons/fa";
import logotr from "../../assets/logotr.png";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="viceFooter">
        <div className="footerContainer">
          <h1 className="firstP">
            {" "}
            We love <br /> to Partner up
          </h1>
          <img src={logotr} alt="logo" width={150} height={150} />
        </div>
        <div className="contact">
          <div className="contactTop">
            <FaHandPointRight size={50} style={{ marginRight: "20px" }} />
            <p className="secondP">
              Looking for partnership? Send an email to
              <br />{" "}
              <a
                className="partnerEmail"
                href="mailto:support@cmginvestment.com "
              >
                support@cmginvestment.com
              </a>
            </p>
          </div>
          <div className="contactBottom">
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/about">
                <li>About</li>
              </Link>
              <Link to="/contact">
                <li>Contact</li>
              </Link>
            </ul>
            <div>
              <p>Find us</p>
              <p>Rome Office: Via Giovanni Amendola, 5400185, Rome, Italy.</p>
              <p>
                Cairo Office: Villa 281 south academy, 5th settlement, New
                cairo, Egypt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
