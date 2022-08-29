import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { request, gql } from 'graphql-request';

const url = 'http://localhost:4000/categories';

const initialState = {
  productsList: [],
  amount: 0,
  total: 0,
  currency: null,
  isLoading: true,
};

const query = gql`
  {
    categories {
      name
      products {
        id
        gallery
        name
      }
    }
  }
`;

// Fetching individual categories.
// {
//   category(input: { title: "tech" }) {
//     name
//     products {
//       id
//       gallery
//       name
//     }
//   }
// }

export const getProducts = createAsyncThunk('products/getProducts', () => {
  request('http://localhost:4000/', query).then((data) => console.log(data));
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    displayItems: (state, action) => {
      console.log(state);
    },
  },
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.isLoading = true;
      console.log('pending');
    },
    [getProducts.fulfilled]: (state, action) => {
      //   console.log(action);
      state.isLoading = false;
      state.cartItems = action.payload;
      console.log(state);
    },
    [getProducts.rejected]: (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
      console.log('fulfiled');
    },
  },
});

export const { displayItems } = productsSlice.actions;

// console.log(cartSlice);
export default productsSlice.reducer;
