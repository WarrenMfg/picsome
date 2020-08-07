function reducer(state, action) {
  switch (action.type) {
    case 'FETCHING_PHOTOS':
      return {
        ...state,
        loading: true
      };
    case 'ADD_PHOTOS_TO_STATE':
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
    case 'UPDATE_FAVORITE': {
      const { photos } = state;
      const i = photos.findIndex(photo => photo.id === action.payload);
      const updatedPhoto = { ...photos[i], isFavorite: !photos[i].isFavorite };
      photos.splice(i, 1, updatedPhoto);
      return {
        ...state,
        photos: [ ...photos ]
      };
    }
    case 'ADD_PHOTO_TO_CART':
      return {
        ...state,
        cart: [ ...state.cart, action.payload ]
      };
    default:
      return state;
  }
}

const initialState = {
  loading: false,
  photos: [],
  error: null,
  cart: []
};

export { reducer, initialState };
