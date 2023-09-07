import React from 'react';

import Home from './Pages/Home';
import Header from './Header';
import AboutMessage from './Pages/About';
import Classes from "./Pages/Classes";
import Trainers from './Pages/Trainers';
import Membership from './Pages/Membership';
import Schedule from './Pages/Schedule';
import MapComponent from './Pages/MapComponent';


const cardData = [
  {
    title: "MUAY THAI",
    image: "https://img2.storyblok.com/1800x743/filters:focal():format(png)/f/115220/2400x990/4bd3c366bb/muay-thai-vs-kickboxing-whats-the-difference.png",
    link: ""
  },
  {
    title: "TRX",
    image: "https://hips.hearstapps.com/hmg-prod/images/suspension-exercise-with-straps-royalty-free-image-1683627077.jpg",
    link: ""
  },
  {
    title: "Cross Fit",
    image: "https://bfsacademy.gr/wp-content/uploads/2018/09/Cross-Training.jpg",
    link: ""
  },
  {
    title: "MMA",
    image: "https://eternalmma.com/wp-content/uploads/2021/02/About-The-Company.jpg",
    link: ""
  },
  {
    title: "Kick Box",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/89/USMC-050716-M-1837P-001.jpg",
    link: ""
  },
  {
    title: "Personal Training",
    image: "https://rwfitness.com/wp-content/uploads/2022/03/Best-Personal-Trainers-in-Edgewater-MD-1024x577.png",
    link: ""
  },
  {
    title: "Weight Loss",
    image: "https://hips.hearstapps.com/hmg-prod/images/gym-training-on-stationary-bikes-royalty-free-image-1127485222-1566915831.jpg?crop=0.780xw:0.587xh;0.220xw,0.154xh&resize=640:*",
    link: ""
  },
  {
    title: "WorkOut",
    image: "https://www.hussle.com/blog/wp-content/uploads/2020/12/Gym-structure-1080x675.png",
    link: ""
  },
  // ... other card data
];

const trainerCardData = [
  {
    title: "Thomas",
    image: "https://hips.hearstapps.com/hmg-prod/images/mh-trainer-2-1533576998.png",
    link: ""
  },
  {
    title: "Kostas",
    image: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.thimble.com/wp-content/uploads/2022/05/Personal-Trainer-Salary-Guide-1200x800.jpg",
    link: ""
  },
  {
    title: "Jessica",
    image: "https://img.freepik.com/premium-photo/young-female-fitness-personal-trainer-with-notepad-standing-gym-with-thumb-up_146671-31568.jpg",
    link: ""
  },
  {
    title: "George",
    image: "https://healthguide.ng/wp-content/uploads/2022/02/Screenshot_2022-02-02-19-21-07-06.jpg",
    link: ""
  }
];

// Define a functional component
function HomePage() {
  return (
    <div>
      <Header/>

      {/* Welcome Text */}
      <div className="header">
      <h1>Welcome To Gym Fitness Club</h1>
      <h3>Training Place</h3>
      </div>
     

      {/* Motivation Text */}
      <div className="header">
        <h1 className="header-title">Change Your Body, Change Your Mindset</h1>
        <h3 className="header-subtitle">If It Was Easy, Everyone Would Do It</h3>
      </div>
      
      <AboutMessage></AboutMessage>

      {/* Text */}
      <div className="header">
        <h1 className="header-title">Visit Our Gym</h1>
        <h3 className="header-subtitle">We don't give promises. We give results.</h3>
      </div>

      {/* Classes Cards */}
      <Classes cardData={cardData} />

      {/* Trainers Cards */}
      <Trainers trainerData={trainerCardData} />

      {/* Buy MemberShip */}
      <div >
        <Membership />
      </div>

      {/* Schedule Made By Admin, viewed by others */}
      <Schedule />

      {/* TODO: Location of Gym using Leaflet on Google Maps */}
      <div >
        <h1>Gym Location</h1>
        {/* <MapComponent /> */}
      </div>


    </div>
  );
}

export default HomePage;