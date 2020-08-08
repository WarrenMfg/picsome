import React, { useState } from 'react';
import placeholder from '../utils/placeholder.jpg';
import PropTypes from 'prop-types';

function Photo({ className, photo, dispatch, cartQuantity }) {
  const [ isHovered, setIsHovered ] = useState(false);
  const [ isLoaded, setIsLoaded ] = useState(false);

  // click handlers
  const updateFavorite = id => dispatch({ type: 'UPDATE_FAVORITE', payload: id });

  const addToCart = (e, photo) => {
    const container = e.target.closest('.image-container');
    container.classList.add('blur-image');
    setTimeout(() => container.classList.remove('blur-image'), 100);

    dispatch({ type: 'ADD_PHOTO_TO_CART', payload: photo });
  };

  // render logic
  const heartIcon = () => {
    if (photo.isFavorite) {
      return <i className='favorite ri-heart-fill' onClick={() => updateFavorite(photo.id)} />;
    } else if (isHovered) {
      return <i className='favorite ri-heart-line' onClick={() => updateFavorite(photo.id)} />;
    } else {
      return null;
    }
  };

  const cartIcon = () => {
    if (cartQuantity) {
      return (
        <p className='cart'>
          <span>{cartQuantity}</span>
          <i className='ri-shopping-cart-fill' onClick={e => addToCart(e, photo)} />
        </p>
      );
    } else if (isHovered) {
      return <i className='ri-add-circle-line cart' onClick={e => addToCart(e, photo)} />;
    } else {
      return null;
    }
  };

  return (
    <div
      className={`image-container${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={isLoaded ? photo.url : placeholder}
        className='image-grid-item'
        onLoad={() => setIsLoaded(true)}
      />
      {heartIcon()}
      {cartIcon()}
    </div>
  );
}

Photo.propTypes = {
  className: PropTypes.string.isRequired,
  photo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired
  }),
  dispatch: PropTypes.func.isRequired,
  cartQuantity: PropTypes.number.isRequired
};

export default React.memo(Photo, (prevProps, nextProps) => {
  if (
    prevProps.photo.isFavorite === nextProps.photo.isFavorite &&
    prevProps.cartQuantity === nextProps.cartQuantity
  ) {
    return true;
  } else {
    return false;
  }
});
