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
      selectedProductCode: code || '',
      selectedProductName: name || '',
      selectedProductPrice: price || '',
      selectedProductUrl: url || '',
      selectedProductQuantity: quantity || '',
      selectedProductDescription: description || '',
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
    const {
      productsArray,
      selectedProductCode,
      selectedProductName,
      selectedProductPrice,
      selectedProductUrl,
      selectedProductQuantity,
      selectedProductDescription,
      productDescriptionMode,
    } = this.state;

    const productsCode = productsArray.map(item => (
      <Product
        key={item.code}
        code={item.code}
        name={item.name}
        price={item.price}
        url={item.url}
        quantity={item.quantity}
        description={item.description}
        productDescriptionMode={productDescriptionMode}
        selectedProductCode={selectedProductCode}
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
          key={selectedProductCode}
          code={selectedProductCode}
          name={selectedProductName}
          price={selectedProductPrice}
          url={selectedProductUrl}
          quantity={selectedProductQuantity}
          description={selectedProductDescription}
          mode={productDescriptionMode}
          changeMode={this.changeMode}
          changeSelectedProductProperties={this.changeSelectedProductProperties}
        />
      </>
    );
  }
}
