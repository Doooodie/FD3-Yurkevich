var Product = React.createClass({
  displayName: 'Product',

  propTypes: {
    code: React.PropTypes.number,
    name: React.PropTypes.string,
    price: React.PropTypes.number,
    url: React.PropTypes.string,
    quantity: React.PropTypes.number,

    selectedProductCode: React.PropTypes.number,
    changeSelectedProductCode: React.PropTypes.func,
  },

  getInitialState: function () {
    return {
      trClass: undefined,
    }
  },

  deleteProduct: function (event) {
    event.stopPropagation();
    this.setState({ trClass: 'hidden' });
  },

  highlightProduct: function () {
    this.props.changeSelectedProductCode(this.props.code);
  },

  render: function () {
    var backgroundColor = (this.props.selectedProductCode === this.props.code) ?
      { backgroundColor: 'aqua' } :
      undefined;

    return React.DOM.tr({ className: this.state.trClass, style: backgroundColor, onClick: this.highlightProduct },
      React.DOM.td(null, this.props.name),
      React.DOM.td(null, this.props.price),
      React.DOM.td(null, this.props.url),
      React.DOM.td(null, this.props.quantity),
      React.DOM.td(null,
        React.DOM.input({ type: 'button', value: 'удалить', onClick: this.deleteProduct }),
      )
    )
  }
});