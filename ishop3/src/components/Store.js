import React, { Component } from 'react';
import '../styles/Store.css';

import Product from './Product.js';
import ProductDescription from './ProductDescription.js';

export default class Store extends Component {
  static defaultProps = {
    productsArray: [
      {
        code: 0,
        name: '',
        price: 0,
        url: '',
        quantity: 0,
        description: '',
      },
    ],

    tableHeader: {
      headerNameText: '',
      headerPriceText: '',
      headerUrlText: '',
      headerQuantityText: '',
      headerControlText: '',
    },
  };

  state = {
    productsArray: this.props.productsArray,

    selectedProductCode: undefined,
    selectedProductName: undefined,
    selectedProductPrice: undefined,
    selectedProductUrl: undefined,
    selectedProductQuantity: undefined,
    selectedProductDescription: undefined,

    productDescriptionMode: 'hidden', //There are 4 modes: hidden, description, editor, newProductEditor
  };

  changeSelectedProductProperties = (code, name, price, url, quantity, description) => {
    this.setState({
      selectedProductCode: code,
      selectedProductName: name,
      selectedProductPrice: price,
      selectedProductUrl: url,
      selectedProductQuantity: quantity,
      selectedProductDescription: description,
    });
  };

  filterArray = code => {
    this.setState({
      productsArray: this.state.productsArray.filter(item => item.code !== code),
    });
  };

  changeMode = mode => {
    this.setState({ productDescriptionMode: mode });
  };

  changeModeToCreateNewProduct = () => {
    this.setState({ productDescriptionMode: 'newProductEditor' });
  };

  render() {
    let tableHeader = [];

    for (let key in this.props.tableHeader) {
      tableHeader.push(<th key={key}>{this.props.tableHeader[key]}</th>);
    }

    let productsCode = this.state.productsArray.map(item => (
      <Product
        key={item.code}
        code={item.code}
        name={item.name}
        price={item.price}
        url={item.url}
        quantity={item.quantity}
        description={item.description}
        selectedProductCode={this.state.selectedProductCode}
        changeSelectedProductProperties={this.changeSelectedProductProperties}
        filterArray={this.filterArray}
        changeMode={this.changeMode}
      />
    ));

    return (
      <>
        <table>
          <tbody>
            <tr>{tableHeader}</tr>
            {productsCode}
          </tbody>
        </table>

        <input type='button' value='Новый товар' onClick={this.changeModeToCreateNewProduct} />

        <ProductDescription
          code={this.state.selectedProductCode}
          name={this.state.selectedProductName}
          price={this.state.selectedProductPrice}
          url={this.state.selectedProductUrl}
          quantity={this.state.selectedProductQuantity}
          description={this.state.selectedProductDescription}
          mode={this.state.productDescriptionMode}
        />
      </>
    );
  }
}
