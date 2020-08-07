import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import CartItem from './CartItem';
import PropTypes from 'prop-types';
import withGlobalStore from './withGlobalStore';

function Cart({ state: { cart, dispatch } }) {
  const [ buttonText, setButtonText ] = useState('Place Order');
  const history = useHistory();

  useEffect(
    () => {
      if (buttonText === 'Order Success!') {
        alert('Your order has been placed!');
        history.push('/');
      }
    },
    [ buttonText ]
  );

  const total = (5.99 * cart.length).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  const handlePlaceOrder = () => {
    setButtonText('Ordering...');
    setTimeout(() => {
      dispatch({ type: 'PLACE_ORDER' });
      setButtonText('Order Success!');
    }, 3000);
  };

  return (
    <main className='cart-page'>
      {cart.length ? <h1>Check out</h1> : <h1>Your cart is empty. Pic some photos!</h1>}

      {cart.map((photo, i) => (
        <CartItem key={`${i}-${photo.id}`} photo={photo} cartIndex={i} dispatch={dispatch} />
      ))}

      {
        !!cart.length &&
        <>
          <p className='total-cost'>Total: {total}</p>
          <div className='order-button'>
            <button onClick={handlePlaceOrder}>
              {buttonText}
            </button>
          </div>
        </>
      }
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
