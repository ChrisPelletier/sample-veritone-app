import React, { Component} from 'react';
import { connect } from 'react-redux';
import { AppBar } from 'veritone-react-common';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import { getUser } from '../actions/userActions';
import UserInfo from './UserInfo';
import ButtonContainer from './ButtonsContainer';

const apiUrl = 'http://localhost:3001';

class App extends Component {
    constructor() {
        super();

        this.state = {
            authError: false
        };
    }

    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(getUser());
    }

    handleAuthorize() {
        window.location = apiUrl + '/api/oauth/authorize';
    }

    handleOnUpload(files) {
        
    }

    render(){
        return (
            <div>
                <AppBar />
                <div style={{margin:100}}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Paper>
                                <UserInfo />
                                <ButtonContainer />
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
