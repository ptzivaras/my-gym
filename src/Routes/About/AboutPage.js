import React from 'react';
import ImageWithTitle from '../../Components/ImageWithTitle/ImageWithTitle';
// import MapComponent from '../../Components/WorldMap/MapComponent';

function AboutPage() {
  return (
    <div>
      <ImageWithTitle imageUrl="https://images.pexels.com/photos/260447/pexels-photo-260447.jpeg?auto=compress&cs=tinysrgb&w=1600" title="Learn About Us" />

     

      <h2 className="header-title">We are here for help you! To Shape Your Body.</h2>
      <p className="header-subtitle">At Top Fitness Club, we are dedicated to helping you achieve the body of your dreams. Our expert trainers and nutritionists will work with you to create a personalized fitness and nutrition plan that helps you reach your specific goals.</p>
      
      {/* <MapComponent /> */}

    </div>

    
  );
}

export default AboutPage;
