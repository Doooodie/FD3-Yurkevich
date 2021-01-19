import React, { Component } from 'react';
import '../styles/ProductDescription.css';

export default class ProductDescription extends Component {
  state = {
    code: this.props.code,
    name: this.props.name,
    price: this.props.price,
    url: this.props.url,
    quantity: this.props.quantity,
    description: this.props.description,
  };

  checkEmptyInput = event => {
    if (event.target.value == '') {
      event.target.classList.add('red-border');
    } else {
      event.target.classList.remove('red-border');
    }
  }

  handleChange = event => {
    this.checkEmptyInput(event);
  };

  render() {
    if (this.props.mode == 'description') {
      return (
        <div>
          <h1>{this.props.name}</h1>
          <p>{this.props.description}</p>
          <p>Price: {this.props.price}</p>
        </div>
      );
    } else if (this.props.mode == 'editor') {
      return (
        <>
          <table className='editor-table'>
            <caption>
              <h2>Изменить существующий товар</h2>
            </caption>
            <tbody>
              <tr>
                <td>ID: {this.props.code}</td>
              </tr>
              <tr>
                <td>Имя</td>
                <td>
                  <input type='text' defaultValue={this.props.name} onChange={this.handleChange} />
                </td>
              </tr>
              <tr>
                <td>Цена</td>
                <td>
                  <input type='text' value={this.props.price} onChange={this.handleChange} />
                </td>
              </tr>
              <tr>
                <td>URL</td>
                <td>
                  <input type='text' value={this.props.url} onChange={this.handleChange} />
                </td>
              </tr>
              <tr>
                <td>Количество</td>
                <td>
                  <input type='text' value={this.props.quantity} onChange={this.handleChange} />
                </td>
              </tr>
            </tbody>
          </table>
          <input type='button' value='Сохранить' onClick={this.changeModeToCreateNewProduct} />
          <input type='button' value='Отмена' onClick={this.changeModeToCreateNewProduct} />
        </>
      );
    } else if (this.props.mode == 'newProductEditor') {
      return (
        <>
          <table className='editor-table'>
            <caption>
              <h2>Добавить новый товар</h2>
            </caption>
            <tbody>
              <tr>
                <td>ID: {this.props.code}</td>
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
          <input type='button' value='Сохранить' onClick={this.changeModeToCreateNewProduct} />
          <input type='button' value='Отмена' onClick={this.changeModeToCreateNewProduct} />
        </>
      );
    } else {
      return null;
    }
  }
}
