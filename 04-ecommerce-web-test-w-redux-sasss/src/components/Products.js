import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../features/products/productsSlice';

export class Products extends Component {
  componentDidMount() {
    this.props.getProducts();
  }
  render() {
    return <div>Products</div>;
  }
}

const mapStateToProps = (state) => ({ products: state.products.productsList });

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(getProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
