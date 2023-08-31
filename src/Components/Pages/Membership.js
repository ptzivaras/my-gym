import React from "react";

const Membership = () => {
  const membershipOptions = [
    { className: "Martial Arts", prices: [50, 140, 210, 350] },
    { className: "TRX", prices: [40, 90, 160, 260] },
    { className: "CrossFit", prices: [35, 85, 155, 255] },
    { className: "Personal Training", prices: [40, 100, 180, 300] },
    { className: "WorkOut/Weight Loss", prices: [30, 80, 150, 250] }
  ];

  return (
    <div className="membership-container">
      <h2>Join Us</h2>
      <div className="membership-grid">
        {membershipOptions.map((option, index) => (
          <div className="membership-option" key={index}>
            <h3>{option.className}</h3>
            <p>{option.prices[0]} €/month</p>
            <select>
              <option value="1">1 Month - {option.prices[0]} €</option>
              <option value="3">3 Months - {option.prices[1]} €</option>
              <option value="6">6 Months - {option.prices[2]} €</option>
              <option value="12">12 Months - {option.prices[3]} €</option>
            </select>
            <button className="cta-button">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Membership;
