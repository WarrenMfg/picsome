import React from 'react';
import Header from './Header';
import Cart from './Cart';
import Photos from './Photos';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <h1>Home Page</h1>

      <Switch>
        <Route exact path='/' component={Photos} />
        <Route path='/cart' component={Cart} />
      </Switch>
    </div>
  );
}

export default App;
