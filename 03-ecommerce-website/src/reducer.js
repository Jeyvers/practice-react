const reducer = (state, action) => {
  if (action.type === 'DISPLAY_PRODUCTS') {
    return { ...state, products: action.payload, loading: false };
  }

  if (action.type === 'ADD_PRODUCT') {
    let tempCart = state.cart;
    const id = action.payload;
    const newProduct = state.products.find((product) => product.id === id);
    const newCart = [...tempCart, { newProduct, amount: 1 }];
    return { ...state, cart: newCart };
  }
  //   throw new Error('no matching action type');
};

export default reducer;
