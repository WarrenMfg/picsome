import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import withGlobalStore from './withGlobalStore';

function Header({ state: { cart } }) {
  const className =
    cart.length > 0 ? 'ri-shopping-cart-fill ri-fw ri-2x' : 'ri-shopping-cart-line ri-fw ri-2x';

  return (
    <header>
      <Link to='/'>
        <h2>Pic Some</h2>
      </Link>
      <Link to='/cart'>
        <i className={className} />
      </Link>
    </header>
  );
}

Header.propTypes = {
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

const memoized = React.memo(Header, (prevProps, nextProps) => {
  if (prevProps.state.cart.length === nextProps.state.cart.length) {
    return true;
  } else if (prevProps.state.cart.length >= 1 && nextProps.state.cart.length >= 1) {
    return true;
  } else {
    return false;
  }
});

export default withGlobalStore(memoized);
