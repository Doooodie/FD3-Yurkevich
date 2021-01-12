import React, { Component } from 'react';

class Product extends Component {
  deleteProduct = () => {
    this.props.changeSelectedProductCode(this.props.code);
    this.props.filterArray(this.props.code);
  };

  highlightProduct = () => {
    this.props.changeSelectedProductCode(this.props.code);
  };

  render() {
    let backgroundColor = this.props.selectedProductCode === this.props.code ? { backgroundColor: 'aqua' } : undefined;

    return (
      <tr style={backgroundColor} onClick={this.highlightProduct}>
        <td>{this.props.name}</td>
        <td>{this.props.price}</td>
        <td>{this.props.url}</td>
        <td>{this.props.quantity}</td>
        <td>
          <input type='button' value='удалить' onClick={this.deleteProduct}></input>
        </td>
      </tr>
    );
  }
}

export default Product;
