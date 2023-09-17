import React from "react";
import "./TrainerMessage.css"; 

const TrainerMessage = () => {
  return (
    <div className="custom1-container">
      <div className="custom1-image">
        <img
          height="500px"
          src="https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cq_auto:good%2Cw_1200/MTk1MTQyMTYwMTQyNTc1MzMw/best-online-personal-trainers_hero.png"
          alt="Image Description"
          className="custom1-image-content"
        />
      </div>
      <div className="custom1-content">
        <h2 className="custom1-title">Why Choose Us</h2>
        <h1 className="custom1-subtitle">We Can Give Shape To Your Body!</h1>
        <p className="custom1-paragraph">
          At Top Gym Fitness Club, we are dedicated to helping you achieve the body of your dreams.
          Our expert trainers and nutritionists will work with you to create a personalized
          fitness and nutrition plan that helps you reach your specific goals.
          Our team of dedicated trainers is here to help you achieve your fitness goals.
          With years of experience and expertise in various disciplines, our trainers are committed to providing
          personalized guidance and support on your fitness journey. Achieve your goals!!
        </p>
        <button className="custom1-button">Meet Our Trainers -{'>'}</button>
      </div>
    </div>
  );
};

export default TrainerMessage;
