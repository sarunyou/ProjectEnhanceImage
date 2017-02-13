import React from 'react';
import ReactDOM from 'react-dom';
import Dropzone from './dropzone';

if(process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf');
}

ReactDOM.render(
  <div>Hello world</div>,
  <Dropzone/>,
  document.getElementById('app')
);
