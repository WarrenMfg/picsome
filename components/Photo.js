import React, { useState } from 'react';

function Photo({ className, photo }) {
  const [ isHovered, setIsHovered ] = useState(false);

  return (
    <div
      className={`image-container${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={photo.url} className='image-grid-item' />
      {
        isHovered &&
        <>
          <i className='ri-heart-line favorite' />
          <i className='ri-add-circle-line cart' />
        </>
      }
    </div>
  );
}

export default Photo;
