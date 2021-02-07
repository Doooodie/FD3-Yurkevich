import React, { Component } from 'react';

export default class RainbowFrame extends Component {
  render() {
    const { colors, children } = this.props;

    /* reduce

    const colorsCode = colors.reduce((prevItem, item, index) => {
      return (
        <div key={index} style={{ border: `solid ${item}` }}>
          {prevItem}
        </div>
      );
    }, children);

    */

    /* forEach

    let colorsCode = children;
    colors.forEach((item, index) => {
      colorsCode = (
        <div key={index} style={{ border: `solid ${item}` }}>
          {colorsCode}
        </div>
      );
    });

    */

    // Recursion

    if (colors.length > 0) {
      return (
        <div style={{ border: `solid ${colors[0]}` }}>
          <RainbowFrame colors={colors.slice(1, colors.length)}>
            {children}
          </RainbowFrame>
        </div>
      );
    }

    return <div>{children}</div>;
  }
}
