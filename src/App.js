import React, {Component} from 'react';
import { AppBar, FilePicker } from 'veritone-react-common';
import api from './api';

const apiUrl = "http://localhost:3001";

class App extends Component {
  constructor() {
    super();

    this.state = {
      authError: false,
      filePickerOpen: false
    };
  }

  handleAuthorize() {
    window.location = apiUrl + "/api/oauth/authorize";
  }

  handleOpenFilePicker() {
    this.setState({filePickerOpen: true});
  }

  handleOnUpload(files) {
    console.log(files);
  }

  render(){
    const filePickerOptions = {
      width: 800,
      height: 400,
      accept: ['.jpeg','.jpg','.png','.gif']
    };

    return (
      <div>
        <AppBar />
        <div style={{margin:100}}>
            <div>
              <button type="button" 
                        className="btn btn-primary" 
                        onClick={this.handleOpenFilePicker.bind(this)}>
                  Open File Picker
              </button>
              <FilePicker isOpen={this.state.filePickerOpen}
                          onUploadFiles={this.handleOnUpload}
                          options={filePickerOptions}/>
            </div> 
        </div>
      </div>
    );
  }
}

export default App;
