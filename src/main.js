import React from 'react';
import ReactDOM from 'react-dom';

import Keyboard from './keyboard.component'

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <Keyboard/>,
    document.getElementById('root')
  );
});
