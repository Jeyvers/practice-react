const reducer = (state, action) => {
  if (action.type === 'DISPLAY_PRODUCTS') {
    return { ...state, products: action.payload, loading: false };
  }
  //   throw new Error('no matching action type');
};

export default reducer;
