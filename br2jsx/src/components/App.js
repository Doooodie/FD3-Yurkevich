import React from 'react';
import BR2JSX from './BR2JSX.js';

const text = 'первый<br>второй<br/>третий<br />последний';

export default () => <BR2JSX text={text} />;
