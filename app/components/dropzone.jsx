var React = require('react');
import ReactDOM from 'react-dom';
var Dropzone = require('react-dropzone');
export default class DropzoneDemo extends React.Component {
  onDrop(files) {
    console.log('Received files: ', files);
  } 

  render() {
      return (
          <div>
            <Dropzone onDrop={this.onDrop}>
              <div>Dropping some files here, or click to select files to upload.</div>
            </Dropzone>
          </div>
      );
  }
}

// ReactDOM.render(<DropzoneDemo />, document.body);