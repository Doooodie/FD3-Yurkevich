import React, { Component } from 'react';

export default class RainbowFrame extends Component {
  render() {
    const { colors, children } = this.props;
    const colorsCode = colors.reduce((prevItem, item, index) => {
      return (
        <div key={index} style={{ border: `solid ${item}` }}>
          {prevItem}
        </div>
      );
    }, children);

    return <>{colorsCode}</>;
  }
}
