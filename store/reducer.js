function reducer(state, action) {
  switch (action.type) {
    case 'ADD_PHOTOS':
      return {
        ...state,
        photos: action.payload
      };
    default:
      return state;
  }
}

const initialState = {
  photos: []
};

export { reducer, initialState };
