import React, { Component } from 'react';
import '../styles/Store.css';

import Product from './Product.js';
import ProductDescription from './ProductDescription.js';

export default class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsArray: require('../products.json'),

      selectedProductCode: '',
      selectedProductName: '',
      selectedProductPrice: '',
      selectedProductUrl: '',
      selectedProductQuantity: '',
      selectedProductDescription: '',

      editedProductName: '',
      editedProductPrice: '',
      editedProductUrl: '',
      editedProductQuantity: '',

      productDescriptionMode: 'hidden', //There are 4 modes: hidden, description, editor, newProductEditor
      isProductChanged: false,
      lastProductCode: 0,
    };
  }

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
      editedProductName: name || '',
      editedProductPrice: price || '',
      editedProductUrl: url || '',
      editedProductQuantity: quantity || '',
    });
  };

  changeEditedProductProperties = (name, price, url, quantity) => {
    this.setState({
      editedProductName: name || '',
      editedProductPrice: price || '',
      editedProductUrl: url || '',
      editedProductQuantity: quantity || '',
    });
  };

  filterArray = code => {
    const { productsArray } = this.state;

    this.setState({
      productsArray: productsArray.filter(item => item.code !== code),
    });
  };

  changeMode = mode => {
    this.setState({ productDescriptionMode: mode });
  };

  changeLastProductCode = () => {
    const { productsArray } = this.state;
    const lastProduct = productsArray[productsArray.length - 1];
    this.setState({ lastProductCode: lastProduct.code + 1 });
  };

  changeModeToCreateNewProduct = () => {
    this.setState({ productDescriptionMode: 'newProductEditor' });
    this.changeSelectedProductProperties(0);
    this.changeLastProductCode();
  };

  checkIfProductChanged = state => {
    this.setState({ isProductChanged: state });
  };

  saveProduct = () => {
    const {
      productDescriptionMode,
      productsArray,
      editedProductName,
      editedProductPrice,
      editedProductUrl,
      editedProductQuantity,
      lastProductCode,
      selectedProductCode,
    } = this.state;

    let descriptionText = 'Ipsum';

    if (Math.random() > 0.5) {
      descriptionText = 'Lorem';
    }

    if (productDescriptionMode === 'editor') {
      productsArray.find(product => {
        if (product.code === selectedProductCode) {
          product.name = editedProductName;
          product.price = editedProductPrice;
          product.url = editedProductUrl;
          product.quantity = editedProductQuantity;
        }
      });
      this.setState({
        productDescriptionMode: 'hidden',
        isProductChanged: false,
      });
    } else {
      productsArray.push({
        code: lastProductCode,
        name: editedProductName,
        price: editedProductPrice,
        url: editedProductUrl,
        quantity: editedProductQuantity,
        description: `${descriptionText}${lastProductCode}`,
      });
      this.setState({ productDescriptionMode: 'hidden' });
    }
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
      editedProductName,
      editedProductPrice,
      editedProductUrl,
      editedProductQuantity,
      isProductChanged,
      lastProductCode,
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
        isProductChanged={isProductChanged}
        changeSelectedProductProperties={this.changeSelectedProductProperties}
        removeProduct={this.filterArray}
        changeMode={this.changeMode}
        changeLastProductCode={this.changeLastProductCode}
      />
    ));

    let isNewButtonDisabled = false;

    if (
      productDescriptionMode === 'editor' ||
      productDescriptionMode === 'newProductEditor'
    ) {
      isNewButtonDisabled = true;
    }

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
          disabled={isNewButtonDisabled}
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
          editedProductName={editedProductName}
          editedProductPrice={editedProductPrice}
          editedProductUrl={editedProductUrl}
          editedProductQuantity={editedProductQuantity}
          mode={productDescriptionMode}
          lastProductCode={lastProductCode}
          checkIfProductChanged={this.checkIfProductChanged}
          changeMode={this.changeMode}
          changeEditedProductProperties={this.changeEditedProductProperties}
          changeSelectedProductProperties={this.changeSelectedProductProperties}
          saveProduct={this.saveProduct}
        />
      </>
    );
  }
}
