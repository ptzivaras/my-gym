import React from "react";
import './classInfo.css';

const DescriptionList = () => {
  const data = [
    {
      id: "0",
      title: "MUAY THAI",
      description: "Muay Thai is not just a martial art; it's a full-body workout that combines cardio, strength training, and self-defense techniques. It's a great way to improve your fitness, flexibility, and mental discipline while learning valuable self-defense skills.",
    },
    {
      id: "1",
      title: "TRX",
      description: "TRX training uses suspension straps to leverage your own body weight for resistance, providing a challenging full-body workout. It's excellent for building strength, balance, and core stability.",
    },
    {
      id: "2",
      title: "CrossFit",
      description: "CrossFit is a high-intensity, functional fitness program that combines elements of weightlifting, cardio, and gymnastics. It's designed to improve overall fitness and performance and is known for its community-driven approach.",
    },
    {
      id: "3",
      title: "MMA",
      description: "MMA training offers a diverse workout that includes striking, grappling, and conditioning. It's not only an effective way to get in shape but also an opportunity to learn various martial arts disciplines.",
    },
    {
      id: "4",
      title: "KickBox",
      description: "Kickboxing is a dynamic and high-energy workout that combines martial arts techniques with cardio. It helps improve endurance, strength, and coordination while providing stress relief.",
    },
    {
      id: "5",
      title: "PersonalTraining",
      description: "Personal training sessions in the gym are tailored to your specific fitness goals. Whether you want to build muscle, lose weight, or improve overall fitness, a personal trainer can create a customized workout plan to help you achieve your objectives.",
    },
    {
      id: "6",
      title: "WeightLoss",
      description: "Weight loss programs at the gym often include a mix of cardio exercises, strength training, and nutritional guidance. It's a structured approach to help you shed extra pounds and maintain a healthy weight.",
    },
    {
      id: "7",
      title: "WorkOut",
      description: "A classic gym workout typically includes weightlifting, cardio machines, and various strength exercises. It's an excellent choice for those looking to build muscle, increase stamina, or maintain their fitness levels.",
    },
  ];

  return (
    <div className="container">
      {data.map((item) => (
         <div className="item" key={item.id}>
         <h2 className="title">{item.title}</h2>
         <p className="description">{item.description}</p>
       </div>
      ))}
    </div>
  );
};

export default DescriptionList;
