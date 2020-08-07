import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../store/GlobalStore';

function withGlobalStore(component) {
  const Component = component;
  return function(props) {
    return <Consumer>{state => <Component state={state} {...props} />}</Consumer>;
  };
}

withGlobalStore.propTypes = {
  component: PropTypes.func.isRequired
};

export default withGlobalStore;
