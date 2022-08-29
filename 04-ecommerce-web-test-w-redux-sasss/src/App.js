import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Products from './components/Products';
import { getProducts } from './features/products/productsSlice';
import { store } from './store';

const appStore = store;

export class App extends Component {
  render() {
    return (
      <Provider store={appStore}>
        <Products />
      </Provider>
    );
  }
}

export default App;
