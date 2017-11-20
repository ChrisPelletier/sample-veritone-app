import {GET_USER, GET_USER_SUCCESS, GET_USER_FAILURE } from '../constants/actionTypes';

let initialState = {
    id: null,
    name: null,
    jsondata: null
};

const user = (state = initialState, action) => {
    switch(action.type) {
    case GET_USER:
        return {
            gettingUser: true
        };
    case GET_USER_SUCCESS:
        return {
            ...state,
            gettingUser: false,
            name: action.name,
            id: action.id,
            firstName: action.firstName,
            lastName: action.lastName,
            accountProfile: action.accountProfile
        };
    case GET_USER_FAILURE:
        return {
            ...state,
            gettingUser: false
        };
    default:
        return state;
    }
};

export default user;