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
