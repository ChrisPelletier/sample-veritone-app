import React, { Component} from 'react';
import { connect } from 'react-redux';
import { AppBar, FilePicker } from 'veritone-react-common';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import { getUser } from '../actions/userActions';
import UserInfo from './UserInfo';

const apiUrl = 'http://localhost:3001';

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
        dispatch(getUser());
    }

    handleAuthorize() {
        window.location = apiUrl + '/api/oauth/authorize';
    }

    handleOpenFilePicker() {
        this.setState({filePickerOpen: true});
    }

    handleOnUpload(files) {
        
    }

    render(){
        const filePickerOptions = {
            accept: ['.jpeg','.jpg','.png','.gif']
        };

        return (
            <div>
                <AppBar />
                <div style={{margin:100}}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Paper>
                                <UserInfo />
                                <Button raised 
                                    color="primary"
                                    onClick={this.handleOpenFilePicker.bind(this)}>
                                    Open File Picker
                                </Button>
                                <FilePicker isOpen={this.state.filePickerOpen}
                                    onUploadFiles={this.handleOnUpload}
                                    options={filePickerOptions}/>
                            </Paper>
                        </Grid>
                    </Grid> 
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        gettingSignedUrl: state.signedWriteableUrl.gettingSignedUrl,
        user: state.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        dispatch: dispatch
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
