import React, { Component } from 'react';
import '../styles/Product.css';

export default class Product extends Component {
  deleteProduct = event => {
    const { name, code, filterArray, changeMode } = this.props;

    event.stopPropagation();
    this.highlightProduct();
    setTimeout(() => {
      const deleteQuestion = confirm(
        `Вы действительно хотите удалить товар ${name}?`
      );

      if (deleteQuestion) {
        filterArray(code);
        changeMode('hidden');
      }
    }, 0);
  };

  highlightProduct = () => {
    const {
      code,
      name,
      price,
      url,
      quantity,
      description,
      changeMode,
    } = this.props;

    this.props.changeSelectedProductProperties(
      code,
      name,
      price,
      url,
      quantity,
      description
    );
    changeMode('description');
  };

  changeProduct = event => {
    event.stopPropagation();
    this.highlightProduct();
    this.props.changeMode('editor');
  };

  render() {
    const {
      code,
      name,
      price,
      url,
      quantity,
      selectedProductCode,
    } = this.props;

    const backgroundColor = selectedProductCode === code ? 'aqua' : '';

    const isButtonDisabled = null;

    return (
      <tr className={backgroundColor} onClick={this.highlightProduct}>
        <td>{name}</td>
        <td>{price}</td>
        <td>{url}</td>
        <td>{quantity}</td>
        <td>
          <input type='button' value='удалить' onClick={this.deleteProduct} />
          <input type='button' value='изменить' onClick={this.changeProduct} />
        </td>
      </tr>
    );
  }
}
