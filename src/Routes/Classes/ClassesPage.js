import React from 'react';
import GymSchedule from '../../Components/GymSchedule/GymSchedule';
import CardGrid from '../../Components/Program/Program';
import ImageWithTitle from '../../Components/ImageWithTitle/ImageWithTitle';

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

function ClassesPage() {
  return (
    <div>
      <ImageWithTitle imageUrl="https://images.pexels.com/photos/260447/pexels-photo-260447.jpeg?auto=compress&cs=tinysrgb&w=1600" title="Available Classes" />

      <CardGrid
        title="Classes Offered"
        description="Explore our fitness classes and schedules."
        cardData={programData}
      />

      {/* <DescriptionList/> */}

      
      <GymSchedule/>
    </div>
  );
}

export default ClassesPage;
