var React = require('react');
import ReactDOM from 'react-dom';
var Dropzone = require('react-dropzone');
export default class DropzoneDemo extends React.Component {
  onDrop(files) {
    console.log('Received files: ', files);
    var file = files[0],
      reader = new FileReader(),
      url = 'http://localhost:3000/api/helloworld';
    // url = 'https://randomuser.me/api/?results=10';
    reader.onload = function (file) {
      fetch(url, {
          method: 'POST',
          body: file,
          headers: new Headers()
        })
        .then(function(resp) {
          if (resp.status !== 200) {
            console.log('Looks like there was a problem' + resp.status)
          }

          resp.json().then(function (data) {
            console.log('Request succeded with' +  JSON.stringify(data));
          })
        } 
        )
        .catch(function (error) {
          console.log('Request failed');
        });
    }.bind(this);
    reader.onload(files);
  }

  render() {
    return (
      <div className="center">
        <Dropzone onDrop={this.onDrop}>
          <div>Dropping some files here, or click to select files to upload.</div>
        </Dropzone>
      </div>
    );
  }
}

// ReactDOM.render(<DropzoneDemo />, document.body);