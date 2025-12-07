import React, { useState } from 'react';
import './Gallery.css';
import { IoClose } from 'react-icons/io5';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      url: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Cardio Area',
      category: 'Equipment'
    },
    {
      id: 2,
      url: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Free Weights Zone',
      category: 'Equipment'
    },
    {
      id: 3,
      url: 'https://images.pexels.com/photos/703016/pexels-photo-703016.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Boxing Ring',
      category: 'Training'
    },
    {
      id: 4,
      url: 'https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Yoga Studio',
      category: 'Classes'
    },
    {
      id: 5,
      url: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'CrossFit Area',
      category: 'Training'
    },
    {
      id: 6,
      url: 'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Personal Training',
      category: 'Training'
    },
    {
      id: 7,
      url: 'https://images.pexels.com/photos/1092878/pexels-photo-1092878.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Locker Rooms',
      category: 'Facilities'
    },
    {
      id: 8,
      url: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Main Gym Floor',
      category: 'Facilities'
    },
    {
      id: 9,
      url: 'https://images.pexels.com/photos/3757376/pexels-photo-3757376.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Group Classes',
      category: 'Classes'
    }
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h2>Our Facilities</h2>
        <p>Take a look at our state-of-the-art gym equipment and training spaces</p>
      </div>

      <div className="gallery-grid">
        {images.map((image) => (
          <div 
            key={image.id} 
            className="gallery-item"
            onClick={() => openLightbox(image)}
          >
            <img src={image.url} alt={image.title} />
            <div className="gallery-overlay">
              <h3>{image.title}</h3>
              <span className="category-badge">{image.category}</span>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <IoClose size={40} />
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.url} alt={selectedImage.title} />
            <div className="lightbox-info">
              <h3>{selectedImage.title}</h3>
              <span className="category-badge">{selectedImage.category}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
