import React from 'react';
import RainbowFrameHOC from './RainbowFrameHOC.js';

const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  '#00BFFF',
  'blue',
  'purple',
];

export default () => <RainbowFrameHOC colors={colors}>Привет!</RainbowFrameHOC>;
