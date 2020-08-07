import React from 'react';
import { render } from 'react-dom';
import { GlobalStore } from './store/GlobalStore';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';

render(
  <Router>
    <GlobalStore>
      <App />
    </GlobalStore>
  </Router>,
  document.getElementById('app')
);
