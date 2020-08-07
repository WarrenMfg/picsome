import React from 'react';
import Photo from './Photo';
import { getClass } from '../utils/utils';
import PropTypes from 'prop-types';
import withGlobalStore from './withGlobalStore';

function Photos({ state }) {
  const { loading, photos, error, cart, dispatch } = state;

  return (
    <main className='photos'>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error! Oh no!</h1>}
      {!!photos.length &&
        photos.map((photo, i) => {
          const cartQuantity = cart.filter(cartPhoto => cartPhoto.id === photo.id).length;
          return (
            <Photo
              key={photo.id}
              cartQuantity={cartQuantity}
              photo={photo}
              className={getClass(i)}
              dispatch={dispatch}
            />
          );
        })}
    </main>
  );
}

Photos.propTypes = {
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

export default withGlobalStore(Photos);
