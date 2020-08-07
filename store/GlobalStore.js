import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import { reducer, initialState } from './reducer';
import { fetchPhotos } from '../api/fetch';

const { Provider, Consumer } = React.createContext();

function GlobalStore({ children }) {
  const [ state, dispatch ] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchPhotos(dispatch);
  }, []);

  return <Provider value={{ ...state, dispatch }}>{children}</Provider>;
}

GlobalStore.propTypes = {
  children: PropTypes.object.isRequired
};

export { GlobalStore, Consumer };
