import React, { useState } from "react";
import Logo from "../assets/logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="navbarContainer">
      <div className="navbarLinksContainer">
        <Link to="/">
          <img src={Logo} alt="logo" className="logo" />
        </Link>
        <ul className="navbarLinks">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>

          <Link to="/message">
            <button className="navbarBtn">Send Message</button>
          </Link>
        </ul>
        <AiOutlineMenu
          className="menuNavIcon"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      {isOpen && (
        <div className="rightBar">
          <div className="rightBarIcon">
            <AiOutlineCloseCircle onClick={() => setIsOpen(false)} />
          </div>
          <div className="rightBarLinksContainer">
            <ul className="rightBarLinks">
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
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
