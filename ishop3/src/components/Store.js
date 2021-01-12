import React, { Component } from 'react';
import Product from './Product.js';
import '../styles/Store.css';

class Store extends Component {
  static defaultProps = {
    productsArray: [
      {
        code: 0,
        name: '',
        price: 0,
        url: '',
        quantity: 0,
      },
    ],
  };

  state = {
    selectedProductCode: undefined,
    productsArray: this.props.productsArray,
  };

  changeSelectedProductCode = code => {
    this.setState({ selectedProductCode: code });
  };

  filterArray = code => {
    this.setState({
      productsArray: this.state.productsArray.filter(item => item.code !== code),
    });
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
        selectedProductCode={this.state.selectedProductCode}
        changeSelectedProductCode={this.changeSelectedProductCode}
        filterArray={this.filterArray}
      />
    ));

    return (
      <table>
        <tbody>
          <tr>{tableHeader}</tr>
          {productsCode}
        </tbody>
      </table>
    );
  }
}

export default Store;
