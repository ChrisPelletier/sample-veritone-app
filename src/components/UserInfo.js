import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CircularProgress } from 'material-ui/Progress';
import styled from 'styled-components';

const UserInfoContainer = styled.div`
    height: 100px;
    border: 1px solid lightgrey;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
`;

const UserName = styled.div`
    text-align: center;
    font-size: 30px;
    font-weight: 500;
`;

const UserEmail = styled.div`
    text-align: center;
    font-size: 20px;
`;

class UserInfo extends Component {
    constructor() {
        super();
    }

    render() {
        console.log(this.props);
        const { firstName, lastName, id, name } = this.props.user;
        return (
            <UserInfoContainer>
                {
                    this.props.user.gettingUser ?
                        <CircularProgress size={50} /> :
                        <div>
                            <UserName>{firstName} {lastName}</UserName>
                            <UserEmail>{id}</UserEmail>
                        </div>
                }
            </UserInfoContainer>
        );
    }
}

UserInfo.propTypes = {
    user: PropTypes.shape({
        accountProfile: PropTypes.string,
        firstName: PropTypes.string,
        gettingUser: PropTypes.bool,
        id: PropTypes.string,
        lastName: PropTypes.string,
        name: PropTypes.string
    })
};

const mapStateToProps = state => {
    console.log(state);
    return {
      user: state.user
    };
};
  
const mapDispatchToProps = dispatch => {
    return {
        dispatch: dispatch
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(UserInfo);