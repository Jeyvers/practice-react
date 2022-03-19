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
  const [semiLoading, setSemiLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');
  const [cartTotal, setCartTotal] = useState(0);
  const cartEnvelope = useRef(null);
  const url = `https://fakestoreapi.com/products/${
    category ? 'category/' + category : ''
  }`;

  // const setLoadingTrue = () => {
  //   console.log('setLoadingTrue function is running');
  //   dispatch({ type: 'SET_LOADING' });
  // };

  const getCategories = async () => {
    const response = await fetch(
      'https://fakestoreapi.com/products/categories'
    );
    const categories = await response.json();
    setCategories(categories);
  };

  const fetchProducts = async () => {
    setSemiLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    dispatch({ type: 'DISPLAY_PRODUCTS', payload: { data, setSemiLoading } });
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

  const runFunctions = () => {
    fetchProducts();
    getCategories();
  };

  // getCategories();
  useEffect(() => {
    // fetchProducts();
    runFunctions();
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [category]);

  useEffect(() => {
    updateTotal();
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        categories,
        cartEnvelope,
        semiLoading,
        setCategory,
        addProduct,
        increaseAmount,
        decreaseAmount,
        deleteItem,
        clearCart,
        addCartEnvelopeClass,
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
