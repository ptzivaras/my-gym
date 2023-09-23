import React from "react";
import "./Program.css";

const Classes= ({ cardData }) => {
  return (
    <div className="grid-container">
      {cardData.map((card, index) => (
        <div className="card grid-item" key={index}>
          <img className="card-img" src={card.image} alt={`Image for ${card.title}`} />

          <h5 className="card-title">{card.title}</h5>
          
        </div>
      ))}
    </div>
  );
};

export default Classes;