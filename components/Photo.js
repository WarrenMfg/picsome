import React from 'react';

function Photo({ className, photo }) {
  return (
    <div className={`image-container ${className || ''}`}>
      <img src={photo.url} className='image-grid' />
    </div>
  );
}

export default Photo;
