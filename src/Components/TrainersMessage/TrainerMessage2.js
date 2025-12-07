import React from "react";
import { Link } from 'react-router-dom';
import "./TrainerMessage2.css"; 

const TrainerMessage2 = () => {
  return (
    <div className="custom-program-card">    
        <h2 className="custom-title">Why Choose Us</h2>
        <h1 className="custom-subtitle">We Can Give Shape To Your Body!</h1>
        <p className="custom-paragraph">
          At Top Gym Fitness Club, we are dedicated to helping you achieve the body of your dreams.
          Our expert trainers and nutritionists will work with you to create a personalized
          fitness and nutrition plan that helps you reach your specific goals.
          Our team of dedicated trainers is here to help you achieve your fitness goals.
          With years of experience and expertise in various disciplines, our trainers are committed to providing
          personalized guidance and support on your fitness journey. Achieve your goals!!
        </p>
        <Link to='/trainers'>
          <button className="custom-button">Meet Our Trainers</button>
        </Link>
    </div>
  );
};

export default TrainerMessage2;
