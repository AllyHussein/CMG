import React from "react";
import Sidebar from "../../Global/Sidebar";
import Navbar from "../../Global/Navbar";
import Partners from "../../components/Partners/Partners";
import Industries from "../../components/Industries/Industries";
import Intro from "../../components/Intro/Intro";
import Owner from "../../components/Owner/Owner";
import Floating from "../../components/Floating/Floating";
import Footer from "../../components/Footer/Footer";
import "./Home.css";
import Landing from "../../components/Carousel/Carousel";

function Home() {
  return (
    <div>
      <div style={{ display: "flex", position: "relative" }}>
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <Landing />
          <Industries />
          <Intro />
          <Partners />
          <Owner />
          <Floating />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
