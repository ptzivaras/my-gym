import React from "react";
import "./CardGrid.css";

const CardGrid= ({  cardData }) => {
  return (
    <div>
      <div className="grid-container">
        {cardData.map((card, index) => (
          <div className="card grid-item" key={index}>
            <img className="card-img" src={card.image} alt={`Image for ${card.title}`} />

            <h5 className="card-title">{card.title}</h5>
            <p className="card-description">{card.description}</p> {/* Display description */}

          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;