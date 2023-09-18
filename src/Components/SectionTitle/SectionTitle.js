import React from "react";
import "./SectionTitle.css"; 

const SectionTitle = ({ title, paragraph }) => {
  return (
    <div className="custom03-Section">
      <h2 className="custom03-title">{title}</h2>
      <p className="custom03-paragraph">{paragraph}</p>
    </div>
  );
};

export default SectionTitle;
