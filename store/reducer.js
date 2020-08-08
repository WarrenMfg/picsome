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
      const updatedPhotoObj = { ...photos[i], isFavorite: !photos[i].isFavorite };
      const newPhotosArr = photos.slice();
      newPhotosArr.splice(i, 1, updatedPhotoObj);
      return {
        ...state,
        photos: [ ...newPhotosArr ]
      };
    }
    case 'ADD_PHOTO_TO_CART':
      return {
        ...state,
        cart: [ ...state.cart, action.payload ]
      };
    case 'DELETE_FROM_CART': {
      state.cart.splice(action.payload, 1);
      return {
        ...state,
        cart: [ ...state.cart ]
      };
    }
    case 'PLACE_ORDER':
      return {
        ...state,
        cart: []
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
