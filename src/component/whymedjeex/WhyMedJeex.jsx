import React from 'react';
import "./WhyMedJeex.css";
import whyimage from "../../asset/whylightimg.webp";

const WhyMedJeex = () => {
  return (
    <div className="whymedjee_container">
      <div className="whymedjee_main">
      <div className="mission_heading">
        <h2>MISSION MEDJEEX</h2>
      </div>
        <img src={whyimage} alt="Why MedJeex" />
      </div>
      <div className="whymedjee_cards">
        <div className="card">
          <div className="rectangle">
            <h3>Live class By India's Top faculty</h3>
          </div>
          <div className="triangle-right"></div>
        </div>
        <div className="card-alternate">
          <div className="triangle-left"></div>
          <div className="rectangle">
            <h3>Live Doubt class by Program Director</h3>
          </div>
        </div>
        <div className="card">
          <div className="rectangle">
            <h3>Mentorship By Aditya Anand, IIT & AIIMS graduates</h3>
          </div>
          <div className="triangle-right"></div>
        </div>
        <div className="card-alternate">
          <div className="triangle-left"></div>
          <div className="rectangle">
            <h3>Module includes Descriptive Lecture wise theory</h3>
          </div>
        </div>
        <div className="card">
          <div className="rectangle">
            <h3>Test Series includes 10000 Questions Practice</h3>
          </div>
          <div className="triangle-right"></div>
        </div>
        <div className="card-alternate">
          <div className="triangle-left"></div>
          <div className="rectangle">
            <h3>Notes & Daily Practice sheet</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyMedJeex;
