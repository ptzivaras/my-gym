import React from "react";

  const Trainers = ({ trainerData }) => {
    return (
      <div>
        <div className="header">
          <h1 className="header-title">Meet Our Trainers</h1>
          <h3 className="header-subtitle">
            Our team of dedicated trainers is here to help you achieve your fitness goals.
            With years of experience and expertise in various disciplines, our trainers are committed
            to providing personalized guidance and support on your fitness journey.
          </h3>
        </div>
  
        <div className="card-grid container">
          {trainerData.map((card, index) => (
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
      </div>
    );
  };
  
  export default Trainers;
  