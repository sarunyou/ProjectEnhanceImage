import React from 'react';
import ReactDOM from 'react-dom';
import Dropzone from './components/dropzone';

if(process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf');
}
class Layout extends React.Component {

  render() {
    return (
      <div>
        <h1> Hello World </h1>
        <Dropzone />
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render( <Layout />, app);
