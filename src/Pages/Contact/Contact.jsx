import React from "react";
import Sidebar from "../../Global/Sidebar";
import Navbar from "../../Global/Navbar";
import Footer from "../../components/Footer/Footer";
import ContactUs from "../../components/ContactUs/ContactUs";

function Contact() {
  return (
    <div>
      <div style={{ display: "flex", position: "relative" }}>
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <ContactUs />

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Contact;
