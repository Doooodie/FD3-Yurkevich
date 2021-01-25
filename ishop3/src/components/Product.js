import React, { Component } from 'react';
import '../styles/Product.css';

export default class Product extends Component {
  deleteProduct = event => {
    event.stopPropagation();
    let deleteQuestion;
    setTimeout(() => {
      deleteQuestion = confirm(`Вы действительно хотите удалить товар ${this.props.name}?`);

      if (deleteQuestion) {
        this.props.filterArray(this.props.code);
        this.props.changeMode('hidden');
      }
    }, 0);
    this.highlightProduct();
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
    const backgroundColor = this.props.selectedProductCode === this.props.code ? 'aqua' : '';

    return (
      <tr className={backgroundColor} onClick={this.highlightProduct}>
        <td>{this.props.name}</td>
        <td>{this.props.price}</td>
        <td>{this.props.url}</td>
        <td>{this.props.quantity}</td>
        <td>
          <input type='button' value='удалить' onClick={this.deleteProduct} />
          <input type='button' value='изменить' onClick={this.changeProduct} />
        </td>
      </tr>
    );
  }
}
