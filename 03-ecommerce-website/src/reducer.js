const reducer = (state, action) => {
  if (action.type === 'DISPLAY_PRODUCTS') {
    return { ...state, products: action.payload, loading: false };
  }

  if (action.type === 'ADD_PRODUCT') {
    let tempCart = state.cart;
    const id = action.payload;
    const newProduct = state.products.find((product) => product.id === id);
    const newCart = [...tempCart, { ...newProduct, amount: 1 }];
    return { ...state, cart: newCart };
  }

  if (action.type === 'UPDATE_TOTAL') {
    let sum = 0;

    state.cart.map((cartItem) => {
      sum += cartItem.amount;
    });

    return { ...state, amount: sum };
  }

  if (action.type === 'INCREASE_AMOUNT') {
    let newCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return { ...state, cart: newCart };
  }

  if (action.type === 'DECREASE_AMOUNT') {
    let newCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount - 1 };
        }

        return cartItem;
      })
      .filter((cartItem) => cartItem.amount !== 0);

    return { ...state, cart: newCart };
  }

  //   throw new Error('no matching action type');
};

export default reducer;
