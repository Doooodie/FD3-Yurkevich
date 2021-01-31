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
      changeLastProductCode,
      changeSelectedProductProperties,
    } = this.props;

    changeSelectedProductProperties(
      code,
      name,
      price,
      url,
      quantity,
      description
    );
    changeMode('description');
    changeLastProductCode();
  };

  changeProduct = event => {
    const { changeMode, changeLastProductCode } = this.props;
    event.stopPropagation();
    this.highlightProduct();
    changeMode('editor');
    changeLastProductCode();
  };

  render() {
    const {
      code,
      name,
      price,
      url,
      quantity,
      productDescriptionMode,
      selectedProductCode,
      isProductChanged,
    } = this.props;

    const backgroundColor = selectedProductCode === code ? 'aqua' : '';
    let isChangeButtonDisabled = false;
    let isDeleteButtonDisabled = false;
    let isProductClickable = this.highlightProduct;

    if (
      productDescriptionMode === 'editor' ||
      productDescriptionMode === 'newProductEditor'
    ) {
      isDeleteButtonDisabled = true;
    }

    if (isProductChanged || productDescriptionMode === 'newProductEditor') {
      isChangeButtonDisabled = true;
    }

    (isProductChanged || productDescriptionMode === 'newProductEditor') &&
      (isProductClickable = null);

    return (
      <tr className={backgroundColor} onClick={isProductClickable}>
        <td>{name}</td>
        <td>{price}</td>
        <td>{url}</td>
        <td>{quantity}</td>
        <td>
          <input
            type='button'
            disabled={isDeleteButtonDisabled}
            value='удалить'
            onClick={this.deleteProduct}
          />
          <input
            type='button'
            disabled={isChangeButtonDisabled}
            value='изменить'
            onClick={this.changeProduct}
          />
        </td>
      </tr>
    );
  }
}
