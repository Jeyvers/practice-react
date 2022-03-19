import React, {
  useState,
  useContext,
  useReducer,
  useEffect,
  useRef,
} from 'react';
import reducer from './reducer';

const AppContext = React.createContext();
const initialState = {
  loading: true,
  cart: [],
  products: [],
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');
  const [cartTotal, setCartTotal] = useState(0);
  const cartEnvelope = useRef(null);
  const url = `https://fakestoreapi.com/products/${
    category ? 'category/' + category : ''
  }`;
  // category/${category}

  const fetchProducts = async () => {
    const response = await fetch(url);
    const data = await response.json();
    dispatch({ type: 'DISPLAY_PRODUCTS', payload: data });
  };

  const addProduct = (id) => {
    dispatch({ type: 'ADD_PRODUCT', payload: id });
  };

  const updateTotal = () => {
    dispatch({ type: 'UPDATE_TOTAL' });
  };

  const increaseAmount = (id) => {
    dispatch({ type: 'INCREASE_AMOUNT', payload: id });
  };

  const decreaseAmount = (id) => {
    dispatch({ type: 'DECREASE_AMOUNT', payload: id });
  };

  const deleteItem = (id) => {
    dispatch({ type: 'DELETE_ITEM', payload: id });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const addCartEnvelopeClass = () => {
    let cartEnvelopeClassList = cartEnvelope.current.classList;
    if (cartEnvelopeClassList.contains('show')) {
      return;
    } else cartEnvelopeClassList.add('show');
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    updateTotal();
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        setCategory,
        addProduct,
        increaseAmount,
        decreaseAmount,
        deleteItem,
        clearCart,
        addCartEnvelopeClass,
        cartEnvelope,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure to use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
