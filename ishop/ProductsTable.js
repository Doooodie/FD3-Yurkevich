var ProductsTable = React.createClass({
  displayName: 'ProductsTable',

  getDefaultProps: function () {
    return {
      code: 666,
      name: 'Ошибка чтения',
      type: 'Ошибка чтения',
      price: 'Ошибка чтения',
      photoUrl: 'Ошибка чтения',
      productsLeft: 'Ошибка чтения',
    }
  },

  render: function () {
    var productsCode = [];
    var productCode;

    this.props.products.forEach(
      function (item, index) {
        if (index == 0) {
          productCode =
            React.DOM.tr({ key: item.code, className: 'Description' },
              React.DOM.th({ className: 'Name' }, item.name),
              React.DOM.th({ className: 'Type' }, item.type),
              React.DOM.th({ className: 'Price' }, item.price),
              React.DOM.th({ className: 'PhotoUrl' }, item.photoUrl),
              React.DOM.th({ className: 'ProductsLeft' }, item.productsLeft),
            );
        } else {
          productCode =
            React.DOM.tr({ key: item.code, className: 'Product' },
              React.DOM.td({ className: 'Name' }, item.name),
              React.DOM.td({ className: 'Type' }, item.type),
              React.DOM.td({ className: 'Price' }, item.price),
              React.DOM.td({ className: 'PhotoUrl' },
                React.DOM.img({ src: item.photoUrl })),
              React.DOM.td({ className: 'ProductsLeft' }, item.productsLeft),
            );
        }
        productsCode.push(productCode);
      }
    )

    return React.DOM.table({ className: 'ProductsTable' },
      React.DOM.caption({ className: 'ShopName' }, this.props.shopName),
      React.DOM.tbody({}, productsCode));
  },
});