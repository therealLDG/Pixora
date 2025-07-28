import React from 'react';
import './Images.css';

// 1. Set a default value for the 'images' prop to prevent errors if it's not passed
export default function Images({ images = [], isLoading }) {
  
  // 2. This logic is now simpler and more reliable.
  // It checks for the empty state only when NOT loading.
  if (images.length === 0 && !isLoading) {
    return (
      <div className="empty-grid">
        <p>Your generated images will appear here.</p>
      </div>
    );
  }

  return (
    <div className="image-grid-container">
      <h2>Your Creations</h2>
      <div className="image-grid">
        {/* Shows a placeholder card while a new image is loading */}
        {isLoading && <div className="skeleton-card"></div>}
        
        {/* Maps over the images array to display each one */}
        {images.map((url, index) => (
          <div className="image-card" key={index}>
            <img src={url} alt={`AI generated art ${index + 1}`} />
            <div className="image-overlay">
              <button className="overlay-button">Download <i class="fa-solid fa-download"></i></button>
              <button className="overlay-button edit-image" style={{backgroundColor:"rgba(0,0,0,0)", border:"2px solid white", color:"white"}}>Edit <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}