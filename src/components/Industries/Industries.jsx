import React from "react";
import "./Industries.css";
import {
  FaBookReader,
  FaGuitar,
  FaHotel,
  FaHardHat,
  FaPills,
  FaHome,
} from "react-icons/fa";

function Industries() {
  return (
    <div className="industriesContainer">
      <h1>We Invest In Many Industries...</h1>
      <div className="industries">
        <div className="industry">
          <FaHotel size={50} className="industryIcon" />
          <h4>Hospitality</h4>
          <p style={{ color: "#5F6973" }}>
            CMG owns and operates a large group of hotels and restaurants all
            over Italy and is now establishing a new luxury hotel in New Cairo.
            In all our facilities, our main focus is providing exceptional
            experiences for our guests that create unforgettable memories.
          </p>
        </div>
        <div className="industry">
          <FaGuitar size={50} className="industryIcon" />
          <h4>Musical Events</h4>
          <p style={{ color: "#5F6973" }}>
            CMG has been known in Italy as "The Summer Kings." It's because of
            our remarkable huge musical events that we organized over the years
            in Italy. In the meantime, CMG is preparing one of the largest
            international events space in Egypt.
          </p>
        </div>
        <div className="industry">
          <FaPills size={50} className="industryIcon" />
          <h4>Pharmaceuticals</h4>
          <p style={{ color: "#5F6973" }}>
            CMG Revolution Pharma is our brand for producing medications and
            vaccines for both human and veterinary sectors in cooperation with
            international pharmaceutical firms in Europe. Also, it provides
            storage and distribution services for other pharmaceutical companies
            is Egypt.
          </p>
        </div>
        <div className="industry">
          <FaHome size={50} className="industryIcon" />
          <h4>Real Estate</h4>
          <p style={{ color: "#5F6973" }}>
            We serve our valued clients in finding their ideal property quickly
            and easily, through our network of more than 100 real estate
            development firms in Egypt.
          </p>
        </div>
        <div className="industry">
          <FaHardHat size={50} className="industryIcon" />
          <h4>Architecture</h4>
          <p style={{ color: "#5F6973" }}>
            With more than 30 years of experience building top-notch hotels and
            restaurants, we offer premier architecture, construction, and
            interior design services to people and companies looking for luxury
            homes, offices, and retail spaces.
          </p>
        </div>
        <div className="industry">
          <FaBookReader size={50} className="industryIcon" />
          <h4>Education</h4>
          <p style={{ color: "#5F6973" }}>
            Out of our strong conviction in the importance of cultural exchange
            and postgraduate study, CMG founded The New Italian Cultural
            Institute in New Cairo with the collaboration of the Italian Embassy
            in Egypt.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Industries;
