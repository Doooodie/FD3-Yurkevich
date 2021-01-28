import React, { Component } from 'react';
import '../styles/ProductDescription.css';

export default class ProductDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: this.props.code,
      name: this.props.name,
      price: this.props.price,
      url: this.props.url,
      quantity: this.props.quantity,
      description: this.props.description,
    };
  }

  hideDescription = () => {
    this.props.changeMode('hidden');
    this.props.changeSelectedProductProperties(0);
  };

  handleChange = event => {
    this.setState({ [event.target.dataset.type]: event.target.value });
  };

  render() {
    const isButtonDisabled =
      this.state.name === '' ||
      this.state.price === '' ||
      this.state.url === '' ||
      this.state.quantity === '';

    return (
      <>
        {this.props.mode === 'description' && (
          <div>
            <h1>{this.state.name}</h1>
            <p>{this.state.description}</p>
            <p>Price: {this.state.price}</p>
          </div>
        )}
        {this.props.mode === 'editor' && (
          <>
            <table className='editor-table'>
              <caption>
                <h2>Изменить существующий товар</h2>
              </caption>
              <tbody>
                <tr>
                  <td>ID: {this.state.code}</td>
                </tr>
                <tr>
                  <td>Имя</td>
                  <td>
                    <input
                      type='text'
                      data-type='name'
                      className={this.state.name === '' ? 'red-background' : ''}
                      value={this.state.name}
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
                      className={this.state.price === '' ? 'red-background' : ''}
                      value={this.state.price}
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
                      className={this.state.url === '' ? 'red-background' : ''}
                      value={this.state.url}
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
                      className={this.state.quantity === '' ? 'red-background' : ''}
                      value={this.state.quantity}
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
        {this.props.mode === 'newProductEditor' && (
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
