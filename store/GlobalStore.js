import React, { useReducer, useEffect } from 'react';
import { reducer, initialState } from './reducer';
import { fetchPhotos } from '../api/fetch';

const { Provider, Consumer } = React.createContext();

function GlobalStore({ children }) {
  const [ state, dispatch ] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchPhotos(dispatch);
  }, []);
  console.log(state.photos);

  return <Provider value={{ ...state, dispatch }}>{children}</Provider>;
}

export { GlobalStore, Consumer };
