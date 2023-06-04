import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import "./Sidebar.css";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sidebarContainer">
      <AiOutlineMenu className="icon" onClick={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <div className="hoveredMenu">
          <div className="hoveredMenuContainer">
            <div className="logoContainer">
              <Link to="/">
                <img src={Logo} alt="logo" width={100} height={100} />
              </Link>
              <div className="closeIcon" onClick={() => setIsOpen(!isOpen)}>
                <AiOutlineClose size={30} />
              </div>
            </div>
            <div className="links">
              <div>
                <Link to="/">Home</Link>
              </div>
              <div>
                <Link to="/about">About</Link>
              </div>
              <div>
                <Link to="/contact">Contact</Link>
              </div>
            </div>
            <div className="bottom">
              <p style={{ fontSize: "16px" }}>
                Looking for collaboration for your next project? Do not hesitate
                to contact us to say hello.
              </p>
              <h5>
                <a className="email" href="mailto:support@cmginvestment.com">
                  support@cmginvestment.com
                </a>
              </h5>
              <div className="socialIcons">
                <Link to="https://www.facebook.com/citymegagroupholding/">
                  <FaFacebook />
                </Link>
                <Link
                  to="https://www.linkedin.com/company/cmg-city-mega-group/"
                  target="_blank"
                >
                  <FaLinkedin />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="sidebarContent">
        <div>
          <a className="email" href="mailto:support@cmginvestment.com">
            support@cmginvestment.com
          </a>
        </div>
        <div className="languages">
          <span>En.</span>
          <span>Fr.</span>
          <span>Ge.</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
