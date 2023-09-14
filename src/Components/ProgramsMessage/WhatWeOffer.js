import React from "react";
import "./CustomWhatWeOffer.css"; 

const CustomWhatWeOffer = () => {
  return (
    <div className="custom-offer-card">
      <h2 className="custom-title">Who We Are</h2>
      <h1 className="custom-subtitle">Take Your Health And Body To Next Level</h1>
      <p className="custom-paragraph">
        Take your health and body to the next level with our comprehensive
        program designed to help you reach your fitness goals.
      </p>
      <div className="custom-offer-details">
        <div className="custom-offer-item">
          <h3 className="custom-item-title">Professional Trainers</h3>
          <i className="fas fa-check custom-item-icon"></i>
          <i class="fa-solid fa-dumbbell"></i>
        </div>
        <div className="custom-offer-item">
          <h3 className="custom-item-title">Modern Equipment</h3>
          <i className="fas fa-check custom-item-icon"></i>
        </div>
        <div className="custom-offer-item">
          <h3 className="custom-item-title">Fancy Gym Design</h3>
          <i className="fas fa-check custom-item-icon"></i>
        </div>
      </div>
      <button className="custom-button">Check Our Classes -{'>'} </button>
    </div>
  );
};

export default CustomWhatWeOffer;
