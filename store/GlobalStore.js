import React, { useReducer } from 'react';
import { reducer, initialState } from './reducer';

const { Provider, Consumer } = React.createContext();

function GlobalStore({ children }) {
  const [ state, dispatch ] = useReducer(reducer, initialState);

  return <Provider value={{ ...state, dispatch }}>{children}</Provider>;
}

export { GlobalStore, Consumer };
