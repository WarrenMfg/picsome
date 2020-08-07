import React, { useEffect } from 'react';
import { fetchPhotos } from '../api/fetch';
import Photo from './Photo';
import { getClass } from '../utils/utils';
import withGlobalStore from './withGlobalStore';

function Photos({ state }) {
  const { dispatch, loading, error, photos } = state;
  useEffect(() => {
    fetchPhotos(dispatch);
  }, []);

  return (
    <main className='photos'>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error! Oh no!</h1>}
      {!!photos.length &&
        photos.map((photo, i) => <Photo key={photo.id} photo={photo} className={getClass(i)} />)}
    </main>
  );
}

export default withGlobalStore(Photos);
