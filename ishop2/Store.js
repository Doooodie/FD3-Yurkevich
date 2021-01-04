var Store = React.createClass({
  displayName: 'Store',

  propTypes: {
    productsArray: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        code: React.PropTypes.number,
        name: React.PropTypes.string,
        price: React.PropTypes.number,
        url: React.PropTypes.string,
        quantity: React.PropTypes.number,
      }).isRequired
    ).isRequired
  },

  getDefaultProps: function () {
    return {
      productsArray: [{
        code: 0,
        name: '',
        price: 0,
        url: '',
        quantity: 0,
      }]
    }
  },

  getInitialState: function () {
    return {
      headerNameText: 'Имя',
      headerPriceText: 'Цена',
      headerUrlText: 'URL',
      headerQuantityText: 'Количество',
      headerControlText: 'Контроль',

      selectedProductCode: undefined,
      productsArray: this.props.productsArray,
    }
  },

  changeSelectedProductCode: function (code) {
    this.setState({ selectedProductCode: code });
  },

  filterArray: function (code) {
    console.log(this.state.selectedProductCode);
    this.setState({
      productsArray: this.state.productsArray.filter(item => item.code !== code)
    })
  },

  render: function () {
    var tableHeader = [];

    for (let i = 0; i < Object.keys(this.state).length - 2; i++) {
      tableHeader.push(React.DOM.th({ key: i }, Object.values(this.state)[i]));
    }

    var productsCode = this.state.productsArray.map(item =>
      React.createElement(Product, {
        key: item.code,
        code: item.code,
        name: item.name,
        price: item.price,
        url: item.url,
        quantity: item.quantity,

        selectedProductCode: this.state.selectedProductCode,
        changeSelectedProductCode: this.changeSelectedProductCode,
        filterArray: this.filterArray,
      })
    );

    return React.DOM.table(null,
      React.DOM.tbody(null,
        React.DOM.tr(null, tableHeader),
        productsCode,
      )
    );
  },
});