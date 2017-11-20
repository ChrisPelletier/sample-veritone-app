import React, { Component} from 'react';
import { connect } from 'react-redux';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import styled from 'styled-components';

const convertBytesToString = bytes => {
    if(bytes === 0) return '0 Bytes';
    let k = 1000,
        sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

const FileListContainer = styled.div`
    padding: 15px;
`;

const FileTableTitle = styled.span`
    font-size: 25px;
    font-weight: 500;
`;

class FileList extends Component {
    render() {
        const { files } = this.props.filePicker;
        return (
            <FileListContainer>
                <FileTableTitle>File List</FileTableTitle>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>Size</TableCell>
                            <TableCell>Last Modified</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            files.map((n,i) => {
                                return (
                                    <TableRow key={i}>
                                        <TableCell>{n.name ? n.name : "N/A"}</TableCell>
                                        <TableCell>{n.type ? n.type : "N/A"}</TableCell>
                                        <TableCell>{n.size ? convertBytesToString(n.size) : "N/A"}</TableCell>
                                        <TableCell>
                                            {n.lastModified ? new Date(n.lastModified).toDateString() : "N/A"}
                                        </TableCell>
                                    </TableRow>
                                );
                            })
                        }
                    </TableBody>
                </Table>
            </FileListContainer>
        )
    }
}

const mapStateToProps = state => {
    return {
        filePicker: state.filePicker
    };
};

const mapDispatchToProps = dispatch => {
    return {
        dispatch: dispatch
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FileList);