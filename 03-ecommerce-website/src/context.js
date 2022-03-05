import React, { useState, useContext, useReducer, useEffect } from 'react';
import reducer from './reducer';

const url = 'https://fakestoreapi.com/products';
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
  const [category, setCategory] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    dispatch({ type: 'DISPLAY_PRODUCTS', payload: data });
  };

  const addProduct = (id) => {
    dispatch({ type: 'ADD_PRODUCT', payload: id });
    console.log(state.cart);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <AppContext.Provider value={{ ...state, addProduct }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure to use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
