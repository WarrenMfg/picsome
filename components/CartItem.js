import React, { useState } from 'react';
import PropTypes from 'prop-types';

function CartItem({ photo, cartIndex, dispatch }) {
  const [ className, setClassName ] = useState('ri-delete-bin-line');
  return (
    <div className='cart-item'>
      <i
        className={className}
        onMouseEnter={() => setClassName('ri-delete-bin-fill')}
        onMouseLeave={() => setClassName('ri-delete-bin-line')}
        onClick={() => dispatch({ type: 'DELETE_FROM_CART', payload: cartIndex })}
      />
      <div className='cart-image-container'>
        <img src={photo.url} />
      </div>
      <p>$5.99</p>
    </div>
  );
}

CartItem.propTypes = {
  photo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired
  }).isRequired,
  cartIndex: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default CartItem;
