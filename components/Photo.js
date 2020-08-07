import React, { useState } from 'react';

function Photo({ className, photo, dispatch }) {
  console.log(photo.id, 'rerendered');
  const [ isHovered, setIsHovered ] = useState(false);

  const updateFavorite = id => {
    dispatch({type: 'UPDATE_FAVORITE', payload: id})
  }

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
          <i className={`favorite ${photo.isFavorite ? 'ri-heart-fill' : 'ri-heart-line'}`}onClick={() => updateFavorite(photo.id)} />
          <i className='ri-add-circle-line cart' />
        </>
      }
    </div>
  );
}

export default React.memo(Photo, (prevProps, nextProps) => {
  if (prevProps.photo.isFavorite === nextProps.photo.isFavorite) {
    return true
  } else {
    return false
  }
});
