import React, {Component} from 'react';
import { connect } from 'react-redux'
import { AppBar, FilePicker } from 'veritone-react-common';
import { getSignedWriteableUrl } from '../actions/index';

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
    const { dispatch } = this.props;
    dispatch(getSignedWriteableUrl());
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

const mapStateToProps = state => {
  console.log(state);
  return {
    gettingSignedUrl: state.gettingSignedUrl
  };
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch: dispatch
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
