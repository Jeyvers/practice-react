const reducer = (state, action) => {
  // if (action.type === 'SET_LOADING') {
  //   return { ...state, loading: true };
  // }
  if (action.type === 'DISPLAY_PRODUCTS') {
    console.log('Loading is false');
    action.payload.setSemiLoading(false);
    return { ...state, products: action.payload.data, loading: false };
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
    let cartItemAmount = 0;
    let totalSum = 0;

    state.cart.map((cartItem) => {
      sum += cartItem.amount;
      cartItemAmount = cartItem.amount * cartItem.price;
      totalSum += cartItemAmount;
    });

    return { ...state, amount: sum, total: totalSum.toFixed(2) };
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

  if (action.type === 'DELETE_ITEM') {
    let newCart = state.cart.filter(
      (cartItem) => cartItem.id !== action.payload
    );
    return { ...state, cart: newCart };
  }

  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] };
  }

  return state;
  //   throw new Error('no matching action type');
};

export default reducer;
