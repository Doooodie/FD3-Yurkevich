import React from 'react';
import RainbowFrame from './RainbowFrame.js';

const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  '#00BFFF',
  'blue',
  'purple',
];

export default () => <RainbowFrame colors={colors}>Hello!</RainbowFrame>;
