import React from 'react';

import Home from './Pages/Home';
import Header from './Header';
import AboutMessage from './Share/TextMessages/Message01';
import Trainers from './Pages/Trainers';
 import MapComponent from './Pages/MapComponent';



const trainerCardData = [
  {
    title: "Thomas",
    image: "https://hips.hearstapps.com/hmg-prod/images/mh-trainer-2-1533576998.png",
    link: "http://localhost:3000/trainers"
  },
  {
    title: "Kostas",
    image: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.thimble.com/wp-content/uploads/2022/05/Personal-Trainer-Salary-Guide-1200x800.jpg",
    link: "http://localhost:3000/trainers"
  },
  {
    title: "Jessica",
    image: "https://img.freepik.com/premium-photo/young-female-fitness-personal-trainer-with-notepad-standing-gym-with-thumb-up_146671-31568.jpg",
    link: "http://localhost:3000/trainers"
  },
  {
    title: "George",
    image: "https://healthguide.ng/wp-content/uploads/2022/02/Screenshot_2022-02-02-19-21-07-06.jpg",
    link: "http://localhost:3000/trainers"
  }
];

// Define a functional component
function HomePage() {
  return (
    <div>
      <Header/>

      <div className="header">
        <h2 className="header-title">Change Your Body, Change Your Mindset</h2>
        <h3 className="header-subtitle">If It Was Easy, Everyone Would Do It</h3>
      </div>
      
      {/* TODO: make this look good */}
      <AboutMessage></AboutMessage>

      {/* TODO: make this look good and a button to go to trainer page*/}
      <div className="">
        <h2 className="header-title">Meet Our Trainers</h2>
        <h3 className="header-subtitle">
          Our team of dedicated trainers is here to help you achieve your fitness goals.
          With years of experience and expertise in various disciplines, our trainers are committed
          to providing personalized guidance and support on your fitness journey.
        </h3>
      </div>


      {/* Text: Display Map of Gym */}
      <div className="header">
        <h2 className="header-title">Visit Our Gym</h2>
        <h3 className="header-subtitle">We don't give promises. We give results.</h3>
      </div>

      {/* TODO: Location of Gym using Leaflet on Google Maps */}
      <div >
        {/* <MapComponent /> */}
      </div>


    </div>
  );
}

export default HomePage;