import React from 'react';
import ReactDOM from 'react-dom';
import Store from './components/Store.js';

const productsArray = require('./products.json');
const tableHeader = require('./tableHeader.json');

ReactDOM.render(<Store productsArray={productsArray} tableHeader={tableHeader} />, document.querySelector('#root'));
