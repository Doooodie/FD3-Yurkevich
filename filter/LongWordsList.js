var LongWordsList = React.createClass({
  displayName: 'LongWordsList',

  propTypes: {
    longWordsArray: React.PropTypes.arrayOf(
      React.PropTypes.string.isRequired
    ).isRequired,
  },

  getDefaultProps: function () {
    return { longWordsArray: ['пусто'] }
  },

  getInitialState: function () {
    return {
      processedWordsArray: this.props.longWordsArray,

      textInputValue: '',
      resetButtonValue: 'сброс',
      isChecked: false,
    }
  },

  processWords: function () {
    var tempWordsArray = this.props.longWordsArray;

    if (this.state.textInputValue) {
      tempWordsArray = tempWordsArray.filter(
        item => item.indexOf(this.state.textInputValue.toLowerCase()) > -1
      )
    } else {
      tempWordsArray = tempWordsArray.slice();
    }

    if (this.state.isChecked) {
      tempWordsArray.sort();
    }

    this.setState({ processedWordsArray: tempWordsArray });
  },

  sortWords: function (event) {
    this.setState({ isChecked: event.target.checked }, this.processWords);
  },

  filterWords: function (event) {
    this.setState({ textInputValue: event.target.value }, this.processWords);
  },

  resetState: function () {
    this.setState({
      processedWordsArray: this.props.longWordsArray,
      textInputValue: '',
    });
  },

  render: function () {
    var wordsCode = this.state.processedWordsArray.map(
      item => React.DOM.option({ key: item }, item)
    );

    return React.DOM.form({},
      React.DOM.input({ type: 'checkbox', checked: this.state.isChecked, onClick: this.sortWords }),
      React.DOM.input({ type: 'text', value: this.state.textInputValue, autoFocus: true, onInput: this.filterWords }),
      React.DOM.input({ type: 'reset', value: this.state.resetButtonValue, onClick: this.resetState }),
      React.DOM.br(null),
      React.DOM.select({ multiple: true }, wordsCode));
  },
});