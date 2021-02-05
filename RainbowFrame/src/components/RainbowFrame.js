import React, { Component } from 'react';

export default class RainbowFrame extends Component {
  render() {
    const { colors } = this.props;
    return <div>{this.props.children}</div>;
  }
}
