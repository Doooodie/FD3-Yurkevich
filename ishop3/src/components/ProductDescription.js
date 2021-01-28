import React, { Component } from 'react';
import '../styles/ProductDescription.css';

export default class ProductDescription extends Component {
  hideDescription = () => {
    const { changeMode, changeSelectedProductProperties } = this.props;
    
    changeMode('hidden');
    changeSelectedProductProperties(0);
  };

  handleChange = event => {
    const {
      code,
      name,
      price,
      url,
      quantity,
      description,
      changeSelectedProductProperties,
    } = this.props;

    switch (event.target.dataset.type) {
      case 'name':
        changeSelectedProductProperties(
          code,
          event.target.value,
          price,
          url,
          quantity,
          description
        );
        break;
      case 'price':
        changeSelectedProductProperties(
          code,
          name,
          event.target.value,
          url,
          quantity,
          description
        );
        break;
      case 'url':
        changeSelectedProductProperties(
          code,
          name,
          price,
          event.target.value,
          quantity,
          description
        );
        break;
      case 'quantity':
        changeSelectedProductProperties(
          code,
          name,
          price,
          url,
          event.target.value,
          description
        );
        break;
    }
  };

  render() {
    const { code, name, price, url, quantity, mode, description } = this.props;

    const isButtonDisabled =
      name === '' || price === '' || url === '' || quantity === '';

    return (
      <>
        {mode === 'description' && (
          <div>
            <h1>{name}</h1>
            <p>{description}</p>
            <p>Price: {price}</p>
          </div>
        )}
        {mode === 'editor' && (
          <>
            <table className='editor-table'>
              <caption>
                <h2>Изменить существующий товар</h2>
              </caption>
              <tbody>
                <tr>
                  <td>ID: {code}</td>
                </tr>
                <tr>
                  <td>Имя</td>
                  <td>
                    <input
                      type='text'
                      data-type='name'
                      className={name === '' ? 'red-background' : ''}
                      value={name}
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
                      className={price === '' ? 'red-background' : ''}
                      value={price}
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
                      className={url === '' ? 'red-background' : ''}
                      value={url}
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
                      className={quantity === '' ? 'red-background' : ''}
                      value={quantity}
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
              onClick={this.logText}
            />
            <input
              type='button'
              value='Отмена'
              onClick={this.hideDescription}
            />
          </>
        )}
        {mode === 'newProductEditor' && (
          <>
            <table className='editor-table'>
              <caption>
                <h2>Добавить новый товар</h2>
              </caption>
              <tbody>
                <tr>
                  <td>ID: {code}</td>
                </tr>
                <tr>
                  <td>Имя</td>
                  <td>
                    <input type='text' />
                  </td>
                </tr>
                <tr>
                  <td>Цена</td>
                  <td>
                    <input type='text' />
                  </td>
                </tr>
                <tr>
                  <td>URL</td>
                  <td>
                    <input type='text' />
                  </td>
                </tr>
                <tr>
                  <td>Количество</td>
                  <td>
                    <input type='text' />
                  </td>
                </tr>
              </tbody>
            </table>
            <input
              type='button'
              value='Сохранить'
              onClick={this.changeModeToCreateNewProduct}
            />
            <input
              type='button'
              value='Отмена'
              onClick={this.changeModeToCreateNewProduct}
            />
          </>
        )}
      </>
    );
  }
}
