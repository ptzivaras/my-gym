import React from 'react';

import Home from './Pages/Home';
import Header from './Header';
import AboutMessage from './Share/TextMessages/Message01';
// import Program from "./Pages/Program/Program";
import Trainers from './Pages/Trainers';
import Membership from './Pages/Membership';
import Schedule from './Pages/Schedule';
 import MapComponent from './Pages/MapComponent';
import CardGrid from './Share/CardGrid/CardGrid';

const programData = [
  {
    title: "MUAY THAI",
    image: "https://img2.storyblok.com/1800x743/filters:focal():format(png)/f/115220/2400x990/4bd3c366bb/muay-thai-vs-kickboxing-whats-the-difference.png",
    link: "http://localhost:3000/classes"
  },
  {
    title: "TRX",
    image: "https://hips.hearstapps.com/hmg-prod/images/suspension-exercise-with-straps-royalty-free-image-1683627077.jpg",
    link: "http://localhost:3000/classes"
  },
  {
    title: "Cross Fit",
    image: "https://bfsacademy.gr/wp-content/uploads/2018/09/Cross-Training.jpg",
    link: "http://localhost:3000/classes"
  },
  {
    title: "MMA",
    image: "https://eternalmma.com/wp-content/uploads/2021/02/About-The-Company.jpg",
    link: "http://localhost:3000/classes"
  },
  {
    title: "Kick Box",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/89/USMC-050716-M-1837P-001.jpg",
    link: "http://localhost:3000/classes"
  },
  {
    title: "Personal Training",
    image: "https://rwfitness.com/wp-content/uploads/2022/03/Best-Personal-Trainers-in-Edgewater-MD-1024x577.png",
    link: "http://localhost:3000/classes"
  },
  {
    title: "Weight Loss",
    image: "https://hips.hearstapps.com/hmg-prod/images/gym-training-on-stationary-bikes-royalty-free-image-1127485222-1566915831.jpg?crop=0.780xw:0.587xh;0.220xw,0.154xh&resize=640:*",
    link: "http://localhost:3000/classes"
  },
  {
    title: "WorkOut",
    image: "https://www.hussle.com/blog/wp-content/uploads/2020/12/Gym-structure-1080x675.png",
    link: "http://localhost:3000/classes"
  },
  // ... other card data
];

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

      {/* Text: Motivation to explore Site */}
      <div className="header">
        <h2 className="header-title">Change Your Body, Change Your Mindset</h2>
        <h3 className="header-subtitle">If It Was Easy, Everyone Would Do It</h3>
      </div>
      
      {/* Text: Description of Gym */}
      <AboutMessage></AboutMessage>

      {/* Text: Available Classes of Gym */}
      {/* <div> */}

      {/* CardList with Gym-Programs */}
      <CardGrid
        title="Classes Offered"
        description="Explore our fitness classes and schedules."
        cardData={programData}
      />

      {/* Text:Meet Trainers */}
      <div className="">
        <h2 className="header-title">Meet Our Trainers</h2>
        <h3 className="header-subtitle">
          Our team of dedicated trainers is here to help you achieve your fitness goals.
          With years of experience and expertise in various disciplines, our trainers are committed
          to providing personalized guidance and support on your fitness journey.
        </h3>
      </div>

      <CardGrid
        cardData={trainerCardData}
      />
      

      {/* Buy MemberShip */}
      <div >
        <Membership />
      </div>

      {/* Schedule Made By Admin, viewed by others */}
      <Schedule />

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