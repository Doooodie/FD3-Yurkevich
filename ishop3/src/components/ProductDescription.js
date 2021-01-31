import React, { Component } from 'react';
import '../styles/ProductDescription.css';

export default class ProductDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isProductChanged: false,
    };
  }

  hideDescription = () => {
    const {
      changeMode,
      checkIfProductChanged,
      changeSelectedProductProperties,
    } = this.props;

    changeMode('hidden');
    changeSelectedProductProperties(0);
    checkIfProductChanged(false);
  };

  handleChange = event => {
    const {
      name,
      price,
      url,
      quantity,
      mode,
      editedProductName,
      editedProductPrice,
      editedProductUrl,
      editedProductQuantity,
      changeEditedProductProperties,
      checkIfProductChanged,
    } = this.props;

    switch (event.target.dataset.type) {
      case 'name':
        if (mode === 'editor') {
          event.target.value !== name
            ? checkIfProductChanged(true)
            : checkIfProductChanged(false);
        }

        changeEditedProductProperties(
          event.target.value,
          editedProductPrice,
          editedProductUrl,
          editedProductQuantity
        );
        break;
      case 'price':
        if (mode === 'editor') {
          +event.target.value !== price
            ? checkIfProductChanged(true)
            : checkIfProductChanged(false);
        }

        changeEditedProductProperties(
          editedProductName,
          event.target.value,
          editedProductUrl,
          editedProductQuantity
        );
        break;
      case 'url':
        if (mode === 'editor') {
          event.target.value !== url
            ? checkIfProductChanged(true)
            : checkIfProductChanged(false);
        }

        changeEditedProductProperties(
          editedProductName,
          editedProductPrice,
          event.target.value,
          editedProductQuantity
        );
        break;
      case 'quantity':
        if (mode === 'editor') {
          +event.target.value !== quantity
            ? checkIfProductChanged(true)
            : checkIfProductChanged(false);
        }

        changeEditedProductProperties(
          editedProductName,
          editedProductPrice,
          editedProductUrl,
          event.target.value
        );
        break;
    }
  };

  render() {
    const {
      code,
      name,
      price,
      mode,
      description,
      editedProductName,
      editedProductPrice,
      editedProductUrl,
      editedProductQuantity,
      saveProduct,
      lastProductCode,
    } = this.props;

    const isButtonDisabled =
      editedProductName === '' ||
      editedProductPrice === '' ||
      editedProductUrl === '' ||
      editedProductQuantity === '';

    return (
      <>
        {mode === 'description' && (
          <div>
            <h1>{name}</h1>
            <p>{description}</p>
            <p>Price: {price}</p>
          </div>
        )}
        {(mode === 'editor' || mode === 'newProductEditor') && (
          <>
            <table className='editor-table'>
              <caption>
                <h2>
                  {mode === 'newProductEditor'
                    ? 'Добавить новый товар'
                    : 'Изменить существующий товар'}
                </h2>
              </caption>
              <tbody>
                <tr>
                  <td>
                    ID: {mode === 'newProductEditor' ? lastProductCode : code}
                  </td>
                </tr>
                <tr>
                  <td>Имя</td>
                  <td>
                    <input
                      type='text'
                      data-type='name'
                      className={
                        editedProductName === '' ? 'red-background' : ''
                      }
                      value={editedProductName}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Цена</td>
                  <td>
                    <input
                      type='text'
                      data-type='price'
                      className={
                        editedProductPrice === '' ? 'red-background' : ''
                      }
                      value={editedProductPrice}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>URL</td>
                  <td>
                    <input
                      type='text'
                      data-type='url'
                      className={
                        editedProductUrl === '' ? 'red-background' : ''
                      }
                      value={editedProductUrl}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Количество</td>
                  <td>
                    <input
                      type='text'
                      data-type='quantity'
                      className={
                        editedProductQuantity === '' ? 'red-background' : ''
                      }
                      value={editedProductQuantity}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <input
              type='button'
              disabled={isButtonDisabled}
              value='Сохранить'
              onClick={saveProduct}
            />
            <input
              type='button'
              value='Отмена'
              onClick={this.hideDescription}
            />
          </>
        )}
      </>
    );
  }
}
