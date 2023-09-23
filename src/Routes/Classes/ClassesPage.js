import React from 'react';
import GymSchedule from '../../Components/GymSchedule/GymSchedule';
import CardGrid from '../../Components/Program/Program';

import ImageWithTitle from '../../Components/ImageWithTitle/ImageWithTitle';

const programData = [
  {
    title: "MUAY THAI",
    description: "Muay Thai, also known as Thai boxing, is a combat sport that uses stand-up striking along with various clinching techniques. It's a great way to improve cardio fitness and overall strength.",
    image: "https://img2.storyblok.com/1800x743/filters:focal():format(png)/f/115220/2400x990/4bd3c366bb/muay-thai-vs-kickboxing-whats-the-difference.png",
    link: "http://localhost:3000/classes"
  },
  {
    title: "TRX",
    description: "TRX is a suspension training system that uses body weight exercises to develop strength, balance, flexibility, and core stability simultaneously. It's suitable for all fitness levels.",
    image: "https://hips.hearstapps.com/hmg-prod/images/suspension-exercise-with-straps-royalty-free-image-1683627077.jpg",
    link: "http://localhost:3000/classes"
  },
  {
    title: "Cross Fit",
    description: "CrossFit is a high-intensity fitness program that incorporates elements from several sports and types of exercise. It's designed to improve cardiovascular fitness and overall physical strength.",
    image: "https://bfsacademy.gr/wp-content/uploads/2018/09/Cross-Training.jpg",
    link: "http://localhost:3000/classes"
  },
  {
    title: "MMA",
    description: "Mixed Martial Arts (MMA) is a full-contact combat sport that combines techniques from various martial arts disciplines. It's a challenging workout that enhances self-defense skills.",
    image: "https://eternalmma.com/wp-content/uploads/2021/02/About-The-Company.jpg",
    link: "http://localhost:3000/classes"
  },
  {
    title: "Kick Box",
    description: "Kickboxing is a group of stand-up combat sports that involve punching and kicking. It's an excellent way to improve cardiovascular health, agility, and coordination.",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/89/USMC-050716-M-1837P-001.jpg",
    link: "http://localhost:3000/classes"
  },
  {
    title: "Personal Training",
    description: "Personal training sessions are tailored to your specific fitness goals and needs. Our trainers will work closely with you to achieve your desired results.",
    image: "https://rwfitness.com/wp-content/uploads/2022/03/Best-Personal-Trainers-in-Edgewater-MD-1024x577.png",
    link: "http://localhost:3000/classes"
  },
  {
    title: "Weight Loss",
    description: "Our weight loss program includes a combination of diet and exercise designed to help you shed pounds and achieve a healthier lifestyle.",
    image: "https://hips.hearstapps.com/hmg-prod/images/gym-training-on-stationary-bikes-royalty-free-image-1127485222-1566915831.jpg?crop=0.780xw:0.587xh;0.220xw,0.154xh&resize=640:*",
    link: "http://localhost:3000/classes"
  },
  {
    title: "WorkOut",
    description: "WorkOut classes are structured fitness sessions that focus on improving endurance, strength, and overall physical fitness. Join us for a challenging workout!",
    image: "https://www.hussle.com/blog/wp-content/uploads/2020/12/Gym-structure-1080x675.png",
    link: "http://localhost:3000/classes"
  }
];

function ClassesPage() {
  return (
    <div>
      <ImageWithTitle imageUrl="https://images.pexels.com/photos/260447/pexels-photo-260447.jpeg?auto=compress&cs=tinysrgb&w=1600" title="Available Classes" />

      <CardGrid
        cardData={programData}
      />

      <GymSchedule/>
    </div>
  );
}

export default ClassesPage;
