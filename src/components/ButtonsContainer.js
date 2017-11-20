import React, {Component} from 'react';
import Button from 'material-ui/Button';
import { FilePicker } from 'veritone-react-common';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Buttons = styled.div`
    height: 100px;
    border-top: 1px solid lightgrey;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
`;

class ButtonContainer extends Component {
    constructor() {
        super();

        this.state = {
            filePickerOpen: false
        };
    }

    handleOpenFilePicker = () => {
        this.setState({filePickerOpen: true});
    }

    handleUploadFiles = () => {

    }

    render() {
        const filePickerOptions = {
            accept: ['.jpeg','.jpg','.png','.gif']
        };
        const { makingRequest } = this.props;
        return (
            <Buttons>
                <Button raised 
                    disabled={makingRequest}
                    color="primary"
                    onClick={this.handleOpenFilePicker.bind(this)}>
                    Open File Picker
                </Button>
                <FilePicker isOpen={this.state.filePickerOpen}
                    onUploadFiles={this.handleUploadFiles}/>
            </Buttons>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        makingRequest: state.user.gettingUser || state.signedWriteableUrl.gettingSignedUrl
    };
};
  
const mapDispatchToProps = dispatch => {
    return {
        dispatch: dispatch
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(ButtonContainer);