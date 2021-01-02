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

      selectedProductCode: null,
    }
  },

  changeSelectedProductCode: function (code) {
    this.setState({ selectedProductCode: code });
  },

  render: function () {
    var tableHeader = [];
    var productsCode = [];

    var selectedProductCode = this.state.selectedProductCode;
    var changeSelectedProductCode = this.changeSelectedProductCode;

    for (let i = 0; i < Object.keys(this.state).length - 1; i++) {
      tableHeader.push(React.DOM.th({ key: i }, Object.values(this.state)[i]));
    }

    this.props.productsArray.forEach(function (item) {
      productsCode.push(
        React.createElement(Product, {
          key: item.code,
          code: item.code,
          name: item.name,
          price: item.price,
          url: item.url,
          quantity: item.quantity,
          selectedProductCode: selectedProductCode,
          changeSelectedProductCode: changeSelectedProductCode,
        })
      );
    });

    return React.DOM.table(null,
      React.DOM.tbody(null,
        React.DOM.tr(null, tableHeader),
        productsCode,
      )
    );
  },
});