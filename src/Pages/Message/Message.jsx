import React from "react";
import Sidebar from "../../Global/Sidebar";
import Navbar from "../../Global/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Message.css";
import ContactForm from "./ContactForm";

function Message() {
  return (
    <div>
      <div style={{ display: "flex", position: "relative" }}>
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className="messageContainer">
            <div className="messageText">
              <h1>
                Send a <span className="messageSpan">Message</span>
              </h1>
              <p className="msgtext1">
                We’re here to answer any question you may have.
              </p>
              <div className="careers">
                <p className="msgtext2">CAREERS</p>
                <p className="msgtext1">
                  Would you like to join our growing team?
                </p>
                <p className="msgtext2">
                  <a className="email" href="mailto:support@cmginvestment.com">
                    support@cmginvestment.com
                  </a>
                </p>
              </div>
            </div>

            <ContactForm />
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Message;
