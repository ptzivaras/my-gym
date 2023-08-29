import React from "react";

const Membership = () => {
  const membershipOptions = [
    { className: "Martial Arts", prices: [230, 550, 1000, 1800] },
    { className: "TRX", prices: [60, 140, 250, 450] },
    { className: "CrossFit", prices: [80, 180, 320, 600] },
    { className: "Personal Training", prices: [100, 240, 420, 800] },
    { className: "WorkOut/Weight Loss", prices: [50, 120, 220, 400] }
  ];

  return (
    <div className="membership-container">
      <h2>Join Us</h2>
      <div className="membership-grid">
        {membershipOptions.map((option, index) => (
          <div className="membership-option" key={index}>
            <h3>{option.className}</h3>
            <p>{option.prices[0]} euros per month</p>
            <select>
              <option value="1">1 Month - {option.prices[0]} euros</option>
              <option value="3">3 Months - {option.prices[1]} euros</option>
              <option value="6">6 Months - {option.prices[2]} euros</option>
              <option value="12">12 Months - {option.prices[3]} euros</option>
            </select>
            <button className="cta-button">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Membership;
