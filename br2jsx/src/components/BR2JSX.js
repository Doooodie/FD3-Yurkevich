import React, { Component } from 'react';

export default class BR2JSX extends Component {
  render() {
    const { text } = this.props;
    const wordsArray = text.replace(/(\<br\s*\/?\>\s*)+/g, ' br ').split(' ');
    const wordsCode = wordsArray.map((item, index) => {
      if (item === 'br') return <br key={index}/>;
      return item
    });

    return wordsCode;
  }
}
