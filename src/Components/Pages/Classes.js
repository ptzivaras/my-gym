import React from "react";

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


  // function Home() {
  //   return (
  //       <div className="card-grid container">
  //       {cardData.map((card, index) => (
  //         <div className="card" key={index}>
  //           <div className="img-container">
  //             <img className="card-img-top" src={card.image} alt={`Image for ${card.title}`} />
  //           </div>
  //           <div className="card-body">
  //             <h5 className="card-title">{card.title}</h5>
  //             <a href={card.link} className="btn btn-primary">
  //               Learn More
  //             </a>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   );
  // }

  const Classes= ({ cardData }) => {
    return (
      <div className="card-grid container">
        {cardData.map((card, index) => (
          <div className="card" key={index}>
            <div className="img-container">
              <img className="card-img-top" src={card.image} alt={`Image for ${card.title}`} />
            </div>
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <a href={card.link} className="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Classes;