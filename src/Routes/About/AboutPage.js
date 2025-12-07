import React from 'react';
import ImageWithTitle from '../../Components/ImageWithTitle/ImageWithTitle';
import LocationContact from '../../Components/LocationContact/LocationContact';
import './AboutPage.css';

function AboutPage() {
  return (
    <div className="about-page">
      <ImageWithTitle 
        imageUrl="https://images.pexels.com/photos/260447/pexels-photo-260447.jpeg?auto=compress&cs=tinysrgb&w=1600" 
        title="Learn About Us" 
      />

      <div className="about-content">
        <h2>We are here to help you shape your body!</h2>
        <p>
          At Top Fitness Club, we are dedicated to helping you achieve the body of your dreams. 
          Our expert trainers and nutritionists will work with you to create a personalized 
          fitness and nutrition plan that helps you reach your specific goals.
        </p>
        <p>
          Whether you're looking to lose weight, build muscle, or simply maintain a healthy lifestyle, 
          our state-of-the-art facilities and supportive community are here to guide you every step 
          of the way.
        </p>
      </div>
      
      <LocationContact />
    </div>
  );
}

export default AboutPage;
