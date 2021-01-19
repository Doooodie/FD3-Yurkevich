import React, { Component } from 'react';

export default class Product extends Component {
  deleteProduct = event => {
    let deleteQuestion = confirm(`Вы действительно хотите удалить товар ${this.props.name}?`);

    event.stopPropagation();
    this.highlightProduct();
    if (deleteQuestion) {
      this.props.filterArray(this.props.code);
      this.props.changeMode('hidden');
    }
  };

  highlightProduct = () => {
    this.props.changeSelectedProductProperties(
      this.props.code,
      this.props.name,
      this.props.price,
      this.props.url,
      this.props.quantity,
      this.props.description
    );
    this.props.changeMode('description');
  };

  changeProduct = event => {
    event.stopPropagation();
    this.highlightProduct();
    this.props.changeMode('editor');
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
          <input type='button' value='изменить' onClick={this.changeProduct}></input>
        </td>
      </tr>
    );
  }
}
