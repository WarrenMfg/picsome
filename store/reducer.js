function reducer(state, action) {
  switch (action.type) {
    case 'FETCHING_PHOTOS':
      return {
        ...state,
        loading: true,
        photos: [],
        error: null
      };
    case 'ADD_PHOTOS':
      return {
        ...state,
        loading: false,
        photos: action.payload
      };
    case 'ERROR_FETCHING_PHOTOS':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}

const initialState = {
  loading: false,
  photos: [],
  error: null
};

export { reducer, initialState };
