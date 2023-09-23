import React from "react";
import "./CardGrid.css";

const CardGrid= ({ title, description, cardData }) => {
  return (
    <div>
       
        {/* TODO: make 2 components for the 2 below */}
        <h2 className="grid-title">{ title }</h2>
        <p className="grid-Description">{ description }</p>

      <div className="grid-container">
        {cardData.map((card, index) => (
          <div className="card grid-item" key={index}>
            <img className="card-img" src={card.image} alt={`Image for ${card.title}`} />

            <h5 className="card-title">{card.title}</h5>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;