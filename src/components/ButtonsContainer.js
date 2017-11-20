import React, {Component} from 'react';
import Button from 'material-ui/Button';
import { FormGroup, FormControlLabel } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import { FilePicker } from 'veritone-react-common';
import styled from 'styled-components';
import { connect } from 'react-redux';
import _ from 'lodash';
import { filesPicked } from '../actions/filePickerActions';

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
            filePickerOpen: false,
            accept: []
        };
    }

    handleOpenFilePicker = () => {
        this.setState({filePickerOpen: true});
    }

    handleUploadFiles = (files) => {
        const { dispatch } = this.props;
        dispatch(filesPicked(files));
    }

    handleClose = (files) => {
        this.setState({filePickerOpen: false});
    }

    handleToggle = (name) => (event) => {
        var newAccept = this.state.accept.slice();
        if (event.target.checked && !_.includes(this.state.accept, name)) {
            newAccept.push(name);
        } else {
            _.remove(newAccept, (n) => {
                return n = name;
            })
        }
        this.setState({accept: newAccept});
    };

    render() {
        const filePickerOptions = {
            accept: this.state.accept
        };
        const { makingRequest } = this.props;
        return (
            <Buttons>
                <FormGroup row>
                    <FormControlLabel
                        control={
                            <Checkbox
                                onChange={this.handleToggle('.png')}
                                value=".png"
                            />
                        }
                        label=".png"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                onChange={this.handleToggle('.jpeg')}
                                value=".jpg"
                            />  
                        }
                        label=".jpg"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                onChange={this.handleToggle('.pdf')}
                                value=".pdf"
                            />
                        }
                        label=".pdf"
                    />
                </FormGroup>
                <Button raised 
                    disabled={makingRequest}
                    color="primary"
                    onClick={this.handleOpenFilePicker.bind(this)}>
                    Open File Picker
                </Button>
                <FilePicker isOpen={this.state.filePickerOpen}
                    onUploadFiles={this.handleUploadFiles}
                    onCloseModal={this.handleClose}
                    options={filePickerOptions}/>
            </Buttons>
        );
    }
}

const mapStateToProps = state => {
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