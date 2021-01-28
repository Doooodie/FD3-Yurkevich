import React, { Component } from 'react';
import '../styles/Store.css';

import Product from './Product.js';
import ProductDescription from './ProductDescription.js';

export default class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsArray: require('../products.json'),

      selectedProductCode: 0,
      selectedProductName: '',
      selectedProductPrice: 0,
      selectedProductUrl: '',
      selectedProductQuantity: 0,
      selectedProductDescription: '',

      productDescriptionMode: 'hidden', //There are 4 modes: hidden, description, editor, newProductEditor
    };
  }

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
  };

  changeSelectedProductProperties = (
    code,
    name,
    price,
    url,
    quantity,
    description
  ) => {
    this.setState({
      selectedProductCode: code || 0,
      selectedProductName: name || '',
      selectedProductPrice: price || 0,
      selectedProductUrl: url || '',
      selectedProductQuantity: quantity || 0,
      selectedProductDescription: description || 0,
    });
  };

  filterArray = code => {
    this.setState({
      productsArray: this.state.productsArray.filter(
        item => item.code !== code
      ),
    });
  };

  changeMode = mode => {
    this.setState({ productDescriptionMode: mode });
  };

  changeModeToCreateNewProduct = () => {
    this.setState({ productDescriptionMode: 'newProductEditor' });
  };

  render() {
    const productsCode = this.state.productsArray.map(item => (
      <Product
        key={item.code}
        code={item.code}
        name={item.name}
        price={item.price}
        url={item.url}
        quantity={item.quantity}
        description={item.description}
        productDescriptionMode={this.state.productDescriptionMode}
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
            <tr>
              <th>Имя</th>
              <th>Цена</th>
              <th>URL</th>
              <th>Количество</th>
              <th>Контроль</th>
            </tr>
            {productsCode}
          </tbody>
        </table>

        <input
          type='button'
          value='Новый товар'
          onClick={this.changeModeToCreateNewProduct}
        />

        <ProductDescription
          key={this.state.selectedProductCode}
          code={this.state.selectedProductCode}
          name={this.state.selectedProductName}
          price={this.state.selectedProductPrice}
          url={this.state.selectedProductUrl}
          quantity={this.state.selectedProductQuantity}
          description={this.state.selectedProductDescription}
          mode={this.state.productDescriptionMode}
          changeMode={this.changeMode}
          changeSelectedProductProperties={this.changeSelectedProductProperties}
        />
      </>
    );
  }
}
