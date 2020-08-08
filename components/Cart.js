import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import CartItem from './CartItem';
import PropTypes from 'prop-types';
import withGlobalStore from './withGlobalStore';

function Cart({ state: { cart, dispatch } }) {
  const [ disabled, setDisabled ] = useState(false);
  const history = useHistory();

  // navigate to '/' after order is placed
  useEffect(
    () => {
      if (disabled === null) {
        alert('Your order has been placed!');
        history.push('/');
      }
    },
    [ disabled ]
  );

  // place order
  const handlePlaceOrder = () => {
    setDisabled(true);
    setTimeout(() => {
      dispatch({ type: 'PLACE_ORDER' });
      if (history.location.pathname === '/cart') {
        setDisabled(null);
      }
    }, 3000);
  };

  // UI when items are in cart
  const total = (5.99 * cart.length).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  const buttonText = disabled ? 'Ordering...' : 'Place Order';

  const totalAndButton = (
    <>
      <p className='total-cost'>Total: {total}</p>
      <div className='order-button'>
        <button onClick={handlePlaceOrder} disabled={disabled}>
          {buttonText}
        </button>
      </div>
    </>
  );

  return (
    <main className='cart-page'>
      {cart.length ? <h1>Checkout</h1> : <h1>Your cart is empty. Pic some photos!</h1>}

      {cart.map((photo, i) => (
        <CartItem key={`${i}-${photo.id}`} photo={photo} cartIndex={i} dispatch={dispatch} />
      ))}

      {!!cart.length && totalAndButton}
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
