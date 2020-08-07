import React from 'react';
import { Consumer } from '../store/GlobalStore';

function withGlobalStore(component) {
  const Component = component;
  return function(props) {
    return <Consumer>{state => <Component state={state} {...props} />}</Consumer>;
  };
}

export default withGlobalStore;
