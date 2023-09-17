import React from "react";
import "./TextImageSplitter.css"; // You can create a CSS file for styling


const TextImageSplitter = ({ leftContent, rightContent }) => {
  return (
    <div className="container">
      <div className="left-half">
        {leftContent}
      </div>
      <div className="right-half">
        {rightContent}
      </div>
    </div>
  );
};

export default TextImageSplitter;
