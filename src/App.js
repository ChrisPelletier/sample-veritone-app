import React, {Component} from 'react';
import { AppBar, FilePicker } from 'veritone-react-common';

const apiUrl = "http://localhost:3001";

class App extends Component {
  constructor() {
    super();

    this.state = {
      authError: false,
      filePickerOpen: false
    };
  }

  componentWillMount() {
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
              <FilePicker isOpen={this.state.filePickerOpen}/>
            </div> 
        </div>
      </div>
    );
  }
}

export default App;
