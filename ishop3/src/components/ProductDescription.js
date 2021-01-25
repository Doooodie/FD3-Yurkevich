import React, { Component } from 'react';
import '../styles/ProductDescription.css';

export default class ProductDescription extends Component {
  state = {
    code: '',
    name: '',
    price: '',
    url: '',
    quantity: '',
    description: '',

    isButtonDisabled: false,
  };

  componentDidUpdate(prevProps) {
    if (this.props.code !== prevProps.code) {
      this.setState({
        code: this.props.code,
        name: this.props.name,
        price: this.props.price,
        url: this.props.url,
        quantity: this.props.quantity,
        description: this.props.description,
      });
    }
  }

  checkEmptyInput = event => {
    if (event.target.value === '') {
      event.target.classList.add('red-border');
      this.setState({ isButtonDisabled: true });
    } else {
      event.target.classList.remove('red-border');
      this.setState({ isButtonDisabled: false });
    }
  };

  checkChangedInput = () => {
    if (
      this.props.name !== this.state.name ||
      this.props.price !== this.state.price ||
      this.props.url !== this.state.url ||
      this.props.quantity !== this.state.quantity
    ) {
      console.log('Не совпадает!')
    }
  };

  handleChange = event => {
    this.checkEmptyInput(event);
    this.checkChangedInput();
    switch (event.target.dataset.type) {
      case 'name':
        this.setState({ name: event.target.value });
        break;
      case 'price':
        this.setState({ price: event.target.value });
        break;
      case 'url':
        this.setState({ url: event.target.value });
        break;
      case 'quantity':
        this.setState({ quantity: event.target.value });
        break;
    }
  };

  render() {
    if (this.props.mode === 'description') {
      return (
        <div>
          <h1>{this.state.name}</h1>
          <p>{this.state.description}</p>
          <p>Price: {this.state.price}</p>
        </div>
      );
    } else if (this.props.mode === 'editor') {
      return (
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
                  <input type='text' data-type='name' value={this.state.name} onChange={this.handleChange} />
                </td>
              </tr>
              <tr>
                <td>Цена</td>
                <td>
                  <input type='text' data-type='price' value={this.state.price} onChange={this.handleChange} />
                </td>
              </tr>
              <tr>
                <td>URL</td>
                <td>
                  <input type='text' data-type='url' value={this.state.url} onChange={this.handleChange} />
                </td>
              </tr>
              <tr>
                <td>Количество</td>
                <td>
                  <input type='text' data-type='quantity' value={this.state.quantity} onChange={this.handleChange} />
                </td>
              </tr>
            </tbody>
          </table>
          <input type='button' disabled={this.state.isButtonDisabled} value='Сохранить' onClick={this.logText} />
          <input type='button' value='Отмена' onClick={this.changeModeToCreateNewProduct} />
        </>
      );
    } else if (this.props.mode === 'newProductEditor') {
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
