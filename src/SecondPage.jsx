import React from "react";
import "./SecondPage.css";
import plantImage from "./assets/plant-image-removebg-preview.png";
import { useNavigate } from "react-router-dom";

function SecondPage () {
  const navigate = useNavigate(); 
  return (
    <div className="onboarding-container">
      <button className="skip-btn">Skip</button>
      <div className="image-container">
        <img
          src= {plantImage} 
          alt="plant"
          className="plant-image"
        />
      </div>
      <h2 className="title">
        {" "}
        Direct Connection to Farmers and Fresh Farm Produce
      </h2>
      <p className="description">
        {" "}
        Transforming lives by bridging the gap between farmers and direct
        consumers
      </p>
      <div className="pagination">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>

      
        <button className="next-btn" onClick={() => navigate('/third')}>Next</button>
      
    </div>
  );
}

export default SecondPage;
