import React from 'react';
import './ImageWithTitle.css';

const ImageWithTitle = ({ imageUrl, title }) => {
  return (
    <div className="image-with-title">
      <img src={imageUrl} alt={title} />
      <div className="title">{title}</div>
    </div>
  );
};

export default ImageWithTitle;
