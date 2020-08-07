import React, { useEffect } from 'react';
import Header from './Header';
import Cart from './Cart';
import Photos from './Photos';
import { Switch, Route } from 'react-router-dom';
import withGlobalStore from './withGlobalStore';

function App(props) {
  const { state: { dispatch } } = props;
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'
        );
        const photos = await res.json();
        dispatch({ type: 'ADD_PHOTOS', payload: photos });
      } catch (err) {
        console.log(err.message, err.stack);
      }
    })();
  }, []);
  console.log(props);

  return (
    <div>
      <Header />

      <Switch>
        <Route exact path='/' component={Photos} />
        <Route path='/cart' component={Cart} />
      </Switch>
    </div>
  );
}

export default withGlobalStore(App);
