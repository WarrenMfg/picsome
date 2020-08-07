import React from 'react';
import PropTypes from 'prop-types';
import withGlobalStore from './withGlobalStore';

function Cart({ state }) {
  console.log(state.cart);
  return (
    <main className='cart-page'>
      <h1>Check out</h1>
    </main>
  );
}

Cart.propTypes = {
  state: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    photos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool.isRequired
      })
    ).isRequired,
    error: PropTypes.object,
    dispatch: PropTypes.func.isRequired,
    cart: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool.isRequired
      })
    ).isRequired
  })
};

export default withGlobalStore(Cart);
