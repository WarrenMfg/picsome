export const fetchPhotos = async dispatch => {
  try {
    dispatch({ type: 'FETCHING_PHOTOS' });

    const res = await fetch(
      'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'
    );
    const photos = await res.json();

    setTimeout(() => dispatch({ type: 'ADD_PHOTOS', payload: photos }), 2000);
  } catch (err) {
    dispatch({ type: 'ERROR_FETCHING_PHOTOS', payload: err });
    console.log(err.message, err.stack);
  }
};
