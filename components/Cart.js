import React from 'react';
import withGlobalStore from './withGlobalStore';

function Cart({ state }) {
  return (
    <main className='cart-page'>
      <h1>Check out</h1>
    </main>
  );
}

export default withGlobalStore(Cart);
